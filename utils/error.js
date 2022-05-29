function handleError(err, res) {
  if (err.name === 'CastError') {
    res.status(400).send({ message: 'NotValid Data' });
  } else if (err.name === 'DocumentNotFoundError') {
    res.status(404).send({ message: 'User not found' });
  } else {
    res.status(500).send({ message: 'An error has occurred on the server' });
  }
}

module.exports = handleError;
