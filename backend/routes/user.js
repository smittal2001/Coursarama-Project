const router = require('express').Router();
let User = require('../models/user.model');

//if there is a get request return all the users 
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//this is a post request that adds a user
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const university = req.body.university;
  const year = req.body.year;
  const password = req.body.password;

  const newUser = new User({username, email, university, year, password});
  //user is saved to database
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;