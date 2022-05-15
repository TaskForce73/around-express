const router = require('express').Router();

const fsPromises = require('fs').promises;

const path = require('path');

const filePath = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
 fsPromises.readFile(filePath, { encoding: 'utf-8' })
    .then((data) => {
      res.status(404).send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
});

module.exports = router;
