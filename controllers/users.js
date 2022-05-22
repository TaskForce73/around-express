const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch(() => {
      res.status(500).send({ message: 'Error' });
    });
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((userId) => {
      res.status(200).send({ data: userId });
    })
    .catch(() => {
      res.status(500).send({ message: 'Error' });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
  .then(users => res.status(200).send({ data: users }))
  .catch(err => res.status(500).send({ message: 'Error' }));
}; 
