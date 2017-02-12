var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Daniel Melo | That Dev', meta: {description: "Daniel Melo é um desenvolvedor web brasileiro fisicamente residente em Goiânia e cidadão da Terra"} });
});

module.exports = router;
