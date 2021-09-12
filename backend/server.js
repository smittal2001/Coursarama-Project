const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const path =  require('path')
const app = express();
const port = process.env.PORT || 5000;
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '../build')))
//   app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
//     res.send(process.env.NODE_ENV);
//   })
// }
// else {
//   app.get('/', (req,res) =>{
//     res.send(process.env.NODE_ENV);
//   })
// }
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://coderRR:coderRR@cluster0.a1otb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const courseReviewRouter = require('./routes/courseReview');
const courseRouter = require('./routes/course');
const usersRouter = require('./routes/user');
const schoolRouter = require('./routes/schools');

app.use('/courseReview', courseReviewRouter);
app.use('/course', courseRouter);
app.use('/users', usersRouter);
app.use('/school', schoolRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});