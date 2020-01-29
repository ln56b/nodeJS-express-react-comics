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

module.exports = router;
