const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  schoolname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  location: {
    type: String,
    required: true,
    minlength: 3
  }
}, {
  timestamps: true,
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;