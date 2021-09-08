const router = require('express').Router();
let Course = require('../models/course.model');

//if there is a get request return all the users 
router.route('/').get((req, res) => {
  Course.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
});

//this is a post request that adds a user
router.route('/add').post((req, res) => {
  const coursename = req.body.coursename;
  const description = req.body.description;
  const professor = req.body.professor;
  const schoolID = req.body.schoolID;

  const newCourse = new Course({coursename, description, professor, schoolID});
  newCourse.save()
    .then(() => res.json('Course added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get/:schoolID').get((req, res) => {
  console.log(req);
  Course.find({schoolID: req.params.schoolID})
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;