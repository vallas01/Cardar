const express = require('express');
const db = require('../db/models');
const router = express.Router();

const { asyncHandler } = require('./utils')
let { Post, Image } = db;

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const posts = await Post.findAll({
    // where: {
    //   [Op.or]: [
    //     {
    //       model: {
    //         [Op.iLike]: `%${req.query.searchedInput}%`
    //       }
    //     },
    //     {
    //       make: {
    //         [Op.iLike]: `%${req.query.searchedInput}%`
    //       }
    //     },
    //     {
    //       color: {
    //         [Op.iLike]: `%${req.query.searchedInput}%`
    //       }
    //     }
    //   ]
    // },
    include: Image
  })

  res.render('index', {
    title: 'Home',
    posts
  })
}));

module.exports = router;
