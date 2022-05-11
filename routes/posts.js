const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/models');

const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils.js');
// } = require('../auth')
const router = express.Router();


const postValidators = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a title for your post.')
        .isLength({ max: 30 })
        .withMessage('Title must be under 30 characters.'),
    check('model')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid model.')
        .isLength({ max: 20 })
        .withMessage('Model name must be under 20 characters long.'),
    check('make')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid make.')
        .isLength({ max: 20 })
        .withMessage('Make name must be under 20 characters long.'),
    check('year')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a year.')
        .isInt({ min: 1922, max: 2022 })
        .withMessage('Please provide a valid year between 1922 to 2022.'),
    check('color')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a color.')
        .isLength({ max: 255 })
        .withMessage('Please provide a color that is under 255 characters.'),
    check('accidents')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for accidents.')
        .isLength({ min: 0 })
        .withMessage('Please provide a number of 0 or above.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description.')
  ];

//   const postValidators = [
//     check('email')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Email Address'),
//     check('password')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Password'),
//   ];

router.get("/new", csrfProtection, asyncHandler(async(req, res) => {
    const post = db.Post.build();

    res.render('new-post', {
        title: 'Add Post',
        post,
        csrfToken: req.csrfToken()
    })
}));

router.post('/new', csrfProtection, postValidators, asyncHandler(async (req, res) => {
    const {
        name,
        model,
        make,
        year,
        color,
        accidents,
        features,
        description,
        ownerId
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
      ownerId
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await post.save();
        res.redirect('/users/:id(\\d+)');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('new-post', {
          title: 'Create Post',
          post,
          errors,
          csrfToken: req.csrfToken()
      })
    }
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = await db.Post.findOne({ where: { id: postId } });
    const comments = await db.Comment.findAll({ where: { postId: postId }});
    res.render('post-page', {
        title: 'Post',
        post,
        comments
    })
}));

module.exports = router;
