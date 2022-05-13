const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/models');

const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { loginUser, logoutUser } = require('../auth')
const router = express.Router();

const userValidators = [
  check('firstName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for First Name.')
      .isLength({ max: 50 })
      .withMessage('First Name must not be more than 50 characters long.'),
  check('lastName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Last Name.')
      .isLength({ max: 50 })
      .withMessage('Last Name must not be more than 50 characters long.'),
  check('email')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Email.')
      .isEmail()
      .withMessage('Please provide a valid email.')
      .isLength({ max: 255 })
      .withMessage('Email must not be more than 255 characters long.'),
  check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Password.')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
      .withMessage('Password should contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*").')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long.'),
  check('confirmPassword')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Confirm Password.')
];

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password.'),
];

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build({});
  res.render('user-register', {
    user,
    title: 'Register',
    csrfToken: req.csrfToken()
  })
})

router.post('/register', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const {
    username,
    password,
    firstName,
    lastName,
    email,
    state
  } = req.body

  const user = db.User.build({
    username,
    firstName,
    lastName,
    email,
    state
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 12)
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    // return res.redirect('/')
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken()
    })
  }
}))

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken()
  })
})

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({where: { email }})

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatch) {
        loginUser(req, res, user);
        // return res.redirect('/');
      }
    }
      errors.push('Login failed for the provided email address and password.')
  } else {
      errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-login', {
          title: 'Login',
          email,
          errors,
          csrfToken: req.csrfToken()
      })
  }

}));

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = await db.User.findOne({where: {id: userId}});
  const posts = await db.Post.findAll({ where: { ownerId: userId}, include: db.Image});
  res.render('user-profile', {
    title: 'User Profile',
    user,
    posts
  });

}));

router.put('/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);
    const {
      fname,
      lname,
      newState,
      newEmail,
      newBio
    } = req.body;

    const firstName = fname;
   

    await user.update({ 
    firstName: fname,
    lastName: lname,
    email: newEmail,
    state: newState,
    bio: newBio
    });
    
     await user.save()
     res.render('user-profile', {
      title: 'User Profile',
      user,
      posts
    });
    return
    

  })
);

router.post('/logout', (req, res) => {
  logoutUser(req, res);
})

module.exports = router;
