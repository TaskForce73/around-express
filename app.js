const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(helmet());

mongoose.connect('mongodb://localhost:27017/aroundb');

app.use('/users', require('./routes/users'));

//app.use('/cards', require('./routes/cards'));

app.get('*' , (req, res) => {
res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
