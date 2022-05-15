const router = require('express').Router();

const fs = require('fs');

const path = require('path');

router.get('/users', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/users.json'),
    { encoding: 'utf8' },
    (err, data) => {
      if (err) {
        console.log(err);
      }
      res.status(404).send(JSON.parse(data));
    },
  );
});

router.get('/users/:id', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/users.json'),
    { encoding: 'utf8' },
    (err, data) => {
      if (err) {
        console.log(err);
      }
      const users = JSON.parse(data);
      users.map((user) => {
        if (user._id === req.params.id) {
          res.send(user);
        }
      });
      res.status(404).send({ message: 'User ID not found' });
    },
  );
});

module.exports = router;
