const express = require('express');
const db = require('../db/models');
const router = express.Router();

const { asyncHandler, searchMakes, searchYears, searchModels } = require('./utils');
const { Post } = db;

router.get('/', asyncHandler(async (req, res) => {
    const models = await Post.searchModels(req.body.model);
    const makes = await Post.searchMakes(req.body.make);
    const years = await Post.searchYears(req.body.year);
    res.render('search', {
        models,
        makes,
        years
    })
}));

module.exports = router;