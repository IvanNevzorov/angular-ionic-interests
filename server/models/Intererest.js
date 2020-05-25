const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interestSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('interests', interestSchema);
