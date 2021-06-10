const router = require('express').Router();
let Review = require('../models/courseReview.model');

router.route('/').get((req, res) => {
  course_review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const coursename = req.body.coursename;
  const review = req.body.review;
  const date = Date.parse(req.body.date);

  const newReview = new Review({
    coursename,
    review,
    date,
  });

  newReview.save()
  .then(() => res.json('Course Review added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Review.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then(() => res.json('Review deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Review.findById(req.params.id)
    .then(review => {
      review.coursename = req.body.coursename;
      review.review = req.body.review;
      review.date = Date.parse(req.body.date);

      review.save()
        .then(() => res.json('Review updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
