const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StateSchema = new Schema({
  country: {
    type: Schema.Types.ObjectId,
    ref: 'countrys'
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = State = mongoose.model('state', StateSchema);
