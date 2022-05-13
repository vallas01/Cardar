const express = require('express')

const router = express.Router();

const { asyncHandler } = require('./utils')

router.get('/', asyncHandler(async (req, res, next) => {
    res.render('about', {
        title: 'About Us'
      })
}));

module.exports = router;