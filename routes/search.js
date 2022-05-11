const express = require('express');
const db = require('../db/models');
const { Op } = require('sequelize');

const router = express.Router();

const { asyncHandler } = require('./utils');
const { Post, Image } = db;



router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          {
            model: {
              [Op.iLike]: `%${req.query.searchedInput}%`
            }
          },
          {
            make: {
              [Op.iLike]: `%${req.query.searchedInput}%`
            }
          },
          {
            color: {
              [Op.iLike]: `%${req.query.searchedInput}%`
            }
          }
        ]
      },
          include:
            Image
    })
    console.log(posts[0].Images[1])
    res.render('search-result', {
        title: "Search Results",
        posts
    })
}));

// router.get("?req.query.searchedInput=", asyncHandler(async (req, res) => {

// }));

module.exports = router;
