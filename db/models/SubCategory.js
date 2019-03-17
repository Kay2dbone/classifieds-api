const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'categorys'
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = SubCategory = mongoose.model('subCategory', SubCategorySchema);
