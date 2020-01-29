
const express = require('express');
const comics = require('./comics');

const bodyParser = require('body-parser');;
const connection = require('../conf');


const router = express.Router({ mergeParams: true });

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

router.use('/comics', comics);

// Post a gender
router.post('/genders', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO gender SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving a gender");
    } else {
      res.sendStatus(200);
    }    
  })
});

// Get all genders
router.get('/genders', (req, res) => {
  connection.query('SELECT * FROM gender', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving a gender");
    } else {
      res.json(results);
    }    
  })
});

// Get a gender by id
router.get('/genders/:id', (req, res) => {
  const showOne= req.params.id;
  connection.query('SELECT * FROM gender WHERE id = ?', [showOne], (err, results) => {
    if (err) {
      res.status(500).send(`Error when getting the gender ${err.message}`);
    } 
    if (results.length === 0) {
      res.status(404).send('Gender not found')
    } else {
      res.json(results[0]);
    }
  });
});

module.exports = router;