const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/connection');

//Routes
//@desc All routes defined in routes/api/
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const items = require('./routes/api/items');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/items', items);

app.listen(PORT, err => {
  if (err) {
    console.log('Error connecting with port');
  }
  console.log(`Listening on Port ${PORT}`);
});

module.exports = { app };
