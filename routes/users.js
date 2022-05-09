const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/models');

const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { loginUser } = require('../auth')
const router = express.Router();

const userValidators = [
  check('firstName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for First Name')
      .isLength({ max: 50 })
      .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Last Name')
      .isLength({ max: 50 })
      .withMessage('Last Name must not be more than 50 characters long'),
  check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email')
      .isLength({ max: 255 })
      .withMessage('Email must not be more than 255 characters long'),
  check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Password')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
      .withMessage('Password should contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
  check('confirmPassword')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Confirm Password')
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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
    res.redirect('/');
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

router.post('/login', csrfProtection, asyncHandler(async (req, res) => {
  const { email, password } = req.body;


}));

module.exports = router;
