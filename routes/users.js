const router = require('express').Router();

const fsPromises = require('fs').promises;

const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

router.get('/users', (req, res) => {
  fsPromises
    .readFile(filePath, { encoding: 'utf-8' })
    .then((data) => {
      res.status(404).send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
});

router.get('/users/:id', (req, res) => {
  fsPromises
    .readFile(filePath, { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      users.map((user) => {
        if (user._id === req.params.id) {
          res.send(user);
        }
      });
      res.status(404).send({ message: 'User ID not found' });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
});

module.exports = router;
