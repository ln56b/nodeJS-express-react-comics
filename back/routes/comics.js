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

// Get all comics 
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM comic';
  const sqlValues = [];
  // Filter comics if author contains
  if (req.query.author) {
    sql += ` WHERE author LIKE '%${req.query.author}%'`;
    sqlValues.push(req.query.author);
  }
  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting the comics');
    } else if (results.length === 0) {
      res.status(404).send('Author not found');
    } else {
      res.json(results);
    }
  });
});

// Get a comic by id
router.get('/:id', (req, res) => {
  const showOne= req.params.id;
  connection.query('SELECT c.*, g.gender_name FROM comic AS c JOIN gender AS g ON g.id = c.gender_id WHERE c.id = ?', [showOne], (err, results) => {
    if (err) {
      res.status(500).send(`Error when getting the comic ${err.message}`);
    } 
    if (results.length === 0) {
      res.status(404).send('Comic not found')
    } else {
      res.json(results[0]);
    }
  });
});

// Put a comic by id
router.put('/:id', (req, res) => {
  const idComic= req.params.comicId;
  const formData = req.body;
  connection.query('UPDATE comic SET ? WHERE id = ?', [formData, idComic], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Error trying to update this comic");
    } else {
      res.sendStatus(200);
    }    
  })
})
// Delete a comic by id
router.delete('/:id', (req, res) => {
  const idComic = req.params.id;
  connection.query('DELETE FROM comic WHERE id = ?', [idComic], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting a comic");
    } else {
      res.sendStatus(200);
    }    
  })
})

module.exports = router;