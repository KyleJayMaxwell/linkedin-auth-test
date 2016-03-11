var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.user){
    var name = req.user.displayname;
  } else {
    var name = 'Stranger';
  }
  res.render('index', { title: 'Hello ' + name })
});

module.exports = router;
