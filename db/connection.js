const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, err => {
  if (err) {
    console.log('Error connecting with database');
  }
  console.log('Connected with database');
});

module.exports = { mongoose };
