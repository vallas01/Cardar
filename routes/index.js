const express = require('express');
const db = require('../db/models');
const router = express.Router();

const { asyncHandler } = require('./utils')
let { Post, Image } = db;

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const allPosts = await Post.findAll({
    include: Image
  })

  const posts = allPosts.slice(allPosts.length - 10, 10);

  res.render('index', {
    title: 'Home',
    posts
  })
}));

module.exports = router;
