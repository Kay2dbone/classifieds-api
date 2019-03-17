const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  image: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  phoneNo: {
    type: String
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
