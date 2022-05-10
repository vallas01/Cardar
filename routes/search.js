const express = require('express');
const db = require('../db/models');
const router = express.Router();

const { asyncHandler, searchPosts } = require('./utils');
const { Post } = db;

router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.searchPosts(`%${req.query.term}%`);
    res.render('search', {
        title: "Search Results",
        posts
    })
}));

module.exports = router;