'use strict';

var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodepop' });
});

/* router.get('/anuncios', async function (req, res, next) {
  try {
    const filename = path.join(__dirname, '../views/anuncios.html');
    const readme = await new Promise((res, rej) => 
      fs.readFile(filename, 'utf8', (err, data) => err ? rej(err) : res(data) )
    );
    res.render('anuncios', { anuncios:'quillo' });
  } catch (err) { 
    return next(err); }
}); */

/* GET Anuncios page. */
/* router.get('/anuncios', function(req, res, next) {
  res.render('anuncios', {title:'Nodepop - Anuncios'});
  
}); */

module.exports = router;
