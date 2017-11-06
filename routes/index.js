var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/github', function(req, res, next) {
  res.send('success!');
});

module.exports = router;
