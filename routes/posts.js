const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/models');

const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { requireAuth } = require('../auth')
const router = express.Router();


const postValidators = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a title for your post.')
        .isLength({ max: 30 })
        .withMessage('Title must be under 30 characters.'),
    check('make')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid make.')
        .isLength({ max: 20 })
        .withMessage('Make name must be under 20 characters long.'),
    check('model')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid model.')
        .isLength({ max: 20 })
        .withMessage('Model name must be under 20 characters long.'),
    check('year')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a year.')
        .isInt({ min: 1901, max: 2022 })
        .withMessage('Please provide a valid year between 1901 to 2022.'),
    check('color')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a color.')
        .isLength({ max: 255 })
        .withMessage('Please provide a color that is under 255 characters.'),
    check('accidents')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for accidents.')
        .isInt({ min: 0 })
        .withMessage('Please provide a number of 0 or above.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description.'),
    check('path')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a link.')
        .isURL({ protocols: ['https'] })
        .withMessage('Please provide a valid URL.')
  ];

//   const postValidators = [
//     check('email')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Email Address'),
//     check('password')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Password'),
//   ];

router.get("/new", csrfProtection, requireAuth, asyncHandler(async(req, res) => {
    const userId = req.session.auth.userId;
    const user = await db.User.findByPk(userId);
    const post = db.Post.build();
    const image = db.Image.build();

    res.render('new-post', {
        title: 'Add Post',
        user,
        post,
        image,
        csrfToken: req.csrfToken()
    })
}));

router.post('/new', csrfProtection, postValidators, requireAuth, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const user = await db.User.findByPk(userId);

    const {
        name,
        model,
        make,
        year,
        color,
        accidents,
        features,
        description,
        path,
        postId,
    } = req.body

    const post = db.Post.build({
        name,
        model,
        make,
        year,
        color,
        accidents,
        features,
        description,
        ownerId: userId
    });

    const image = db.Image.build({
        path,
        postId
    })

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await post.save();
        await image.save();
        return res.redirect(`/posts/${post.id}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('new-post', {
          title: 'Create Post',
          post,
          user,
          image,
          errors,
          csrfToken: req.csrfToken()
      })
    }
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = await db.Post.findOne({ where: { id: postId }, include: db.Image });
    const comments = await db.Comment.findAll({ where: { postId: postId }});
    res.render('post-page', {
        title: 'Post',
        post,
        comments
    })
}));

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    console.log("**********got here*****", req.body)
    const post = await db.Post.findByPk(req.params.id);
    const {
        make,
        model,
        year
    } = req.body


    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await post.update({
            make,
            model,
            year
        });
        await post.save()
        res.render('user-profile', {user});


    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.json({
          message: `Post Edit Failed`
      })
    }
    return
}))



router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {

    const postId = parseInt(req.params.id, 10);
    const post = await db.Post.findOne({ where: { id: postId } });

    if (post) {
        await post.destroy()
        res.status(201)
        res.json({message:'Delete SUCCESS'})
    } else {
        res.json({message:'Delete FAIL'})
    }

}));




module.exports = router;
