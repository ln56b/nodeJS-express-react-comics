const express = require('express');

const bodyParser = require('body-parser');;
const connection = require('../conf');

const router = express.Router({ mergeParams: true });

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Get all comics depending on their genre
router.get('/', (req, res) => {
  const showAll= req.params.genderId;
  connection.query('SELECT * FROM comic WHERE id = ?', [showAll], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving a comic");
    } else {
      res.json(results)
    }
  })
})

module.exports = router;
