'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodepop' });
});

/* GET Anuncios page. */
router.get('/anuncios', function(req, res, next) {
  res.render('anuncios', {title:'Nodepop - Anuncios'});
});

module.exports = router;
