const express = require('express');
const app = require('../app');
const db = require('../db/models');
const router = express.Router();

const { asyncHandler } = require('./utils')
let { Post, Image } = db;


/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const allPosts = await Post.findAll({
    order: [
      ['createdAt', 'DESC']
    ],
    include: Image
  })

  const posts = allPosts.slice(allPosts.length - 19, 10);

  res.render('index', {
    title: 'Home',
    posts, 
  })
}));

module.exports = router;
