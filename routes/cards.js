const router = require('express').Router();

const fs = require('fs');

const path = require('path');

router.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/cards.json'),
    { encoding: 'utf8' },
    (err, data) => {
      if (err) {
        console.log(err);
      }
      res.status(400).send(JSON.parse(data));
    },
  );
});

module.exports = router;
