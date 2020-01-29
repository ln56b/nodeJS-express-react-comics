
const express = require('express');
const comicsByGender = require('./comicsByGender');

const bodyParser = require('body-parser');;
const connection = require('../conf');

const router = express.Router({ mergeParams: true });

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

router.use('/:genderId/comics', comicsByGender);

// Post a gender
router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO gender SET ?', formData, (err, results) => {
    if (err) {
      res.status(500).send('Error when getting the genders');
    } else {
      res.sendStatus(200);
    }    
  })
});

// Get all genders
router.get('/', (req, res) => {
  connection.query('SELECT * FROM gender', (err, results) => {
    if (err) {
      res.status(500).send('Error getting the genders');
    } 
    res.json(results);
  })
});

// Get a gender by id
router.get('/:genderId', (req, res) => {
  const showOne= req.params.genderId;
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

// Put a gender by id
router.put('/:genderId', (req, res) => {
  const idGender= req.params.genderId;
  const formData = req.body;
  connection.query('UPDATE gender SET ? WHERE id = ?', [formData, idGender], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Error trying to update this gender");
    } else {
      res.sendStatus(200);
    }    
  })
})


module.exports = router;