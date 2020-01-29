  
const express = require('express');
const genders = require('./genders');
const comics = require('./comics');

const router = express.Router();

router.use('/genders', genders);
router.use('/comics', comics)


/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'ALL ABOUT COMICS'
  });
});

module.exports = router;