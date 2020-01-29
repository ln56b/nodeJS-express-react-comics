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

router.post('/comics', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO comic SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving a comic");
    } else {
      res.sendStatus(200);
    }    
  })
});


module.exports = router;
