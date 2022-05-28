const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send({ data: cards });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports.createCard = (req, res) => {
  console.log(req.user._id);
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.status(200).send({ data: card });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .orFail()
    .then((card) => {
      res.status(200).send({ data: card });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
    )
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
    )
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch(() => {
      res.status(500).send({ message: 'An error has occurred on the server' });
    });
};
