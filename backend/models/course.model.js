const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  coursename: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    minlength: 3
  },
  professor: {
    type: String,
    required: true,
    minlength: 3
  },

}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;