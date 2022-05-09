var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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
