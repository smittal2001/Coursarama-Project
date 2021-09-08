const router = require('express').Router();
let School = require('../models/school.model');

//if there is a get request return all the users 
router.route('/').get((req, res) => {
  School.find()
    .then(schools => res.json(schools))
    .catch(err => res.status(400).json('Error: ' + err));
});

//this is a post request that adds a user
router.route('/add').post((req, res) => {
  const schoolname = req.body.schoolname;
  const location = req.body.location;

  const newSchool = new School({schoolname, location});
  newSchool.save()
    .then(() => res.json('School added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;