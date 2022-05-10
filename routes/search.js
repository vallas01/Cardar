const express = require('express');
const db = require('../db/models');
const { Op } = require('sequelize');

const router = express.Router();

const { asyncHandler } = require('./utils');
const { Post } = db;



router.get('/', asyncHandler(async (req, res) => {
    const { searchedInput } = req.body;
    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          { 
            model: {
              [Op.iLike]: `%${searchedInput}%`
            }
          },
          {
            make: {
              [Op.iLike]: `%${searchedInput}%`
            }
          },
        //   {
        //     year: {
        //       [Op.iLike]: `%${searchedInput}%` returned: operator does not exist: integer ~~* unknown
        //     }
        //   },
          {
            color: {
              [Op.iLike]: `%${searchedInput}%`
            }
          }
        ]
      }
    })
    
    res.render('search', {
        title: "Search Results",
        posts
    })
}));

module.exports = router;