var express = require('express');
const Music = require('../public/javascripts/test');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/api',function (req, res, next) {
  const list = Music.find();
  res.jsonp(list.map(function (value) {
    const temp = {};
    Object.assign(temp,value);
    return temp;
  }))
});

module.exports = router;
