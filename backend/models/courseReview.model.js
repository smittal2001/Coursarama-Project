const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseReviewSchema = new Schema({
  coursename: { type: String, required: true },
  review: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const course_review = mongoose.model('course_review', courseReviewSchema);

module.exports = course_review;
