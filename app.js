const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', usersRouter);

app.use('/cards', cardsRouter);

app.get('/', (req, res) => {
  res.status(404).json({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
