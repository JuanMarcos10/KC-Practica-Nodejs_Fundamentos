'use strict';

const router = require('express').Router();
const fs = require('fs');
const path = require('path');

/* GET readme page. */
router.get('/', function(req, res, next) {
  res.render('readme');
});


/* GET readme page. */
/* router.get('/', async function (req, res, next) {
  try {
    const filename = path.join(__dirname, './readme.md');
    const readme = await new Promise((res, rej) => 
      fs.readFile(filename, 'utf8', (err, data) => err ? rej(err) : res(data))
    );
    res.render('readme', { readme });
  } catch (err) { return next(err); }
}); */

module.exports = router;
