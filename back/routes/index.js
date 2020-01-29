  
const express = require('express');
const genders = require('./genders');


const router = express.Router();

router.use('/', genders);


/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'ALL ABOUT COMICS'
  });
});

module.exports = router;