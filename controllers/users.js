const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .orFail()
    .then((userId) => {
      res.status(200).send({ data: userId });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports.updateProfile = (req, res) => {
  User.findByIdAndUpdate(req.user._id, {
    name: req.user.name,
    about: req.user.about,
  })
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports.updateAvatar = (req, res) => {
  User.findByIdAndUpdate(req.user._id, { avatar: req.user.avatar })
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};
