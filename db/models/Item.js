const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  country: {
    type: Schema.Types.ObjectId,
    ref: 'countrys'
  },
  state: {
    type: Schema.Types.ObjectId,
    ref: 'states'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'categorys'
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'subCategorys'
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'profiles'
  },
  image: {
    type: String
  },
  price: {
    type: Number
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  loc: {
    lon: {
      type: Number
    },
    lat: {
      type: Number
    }
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
