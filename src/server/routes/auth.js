var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Authorization Test' });
});

router.get('/linkedin', function(req, res, next) {
  res.render('index', { title: 'LinkedIn' });
});

router.get('/linkedin/callback', function(req, res, next) {
  res.render('index', { title: 'Callback' });
});

router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Logout' });
});

module.exports = router;