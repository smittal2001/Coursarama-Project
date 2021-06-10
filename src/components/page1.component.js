import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class Page1 extends Component {
    constructor(props) {
        super(props);

        this.onChangeCoursename = this.onChangeCoursename.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            coursename: '',
            review: '',
            date: new Date(),
            courses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/course/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                courses: response.data.map(course => course.coursename),
                coursename: response.data[0].coursename
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
    
    onChangeCoursename(e)
    {
        this.setState({
            coursename: e.target.value
        });
    }

    onChangeReview(e)
    {
        this.setState({
            review: e.target.value
        });
    }

    onChangeDate(date)
    {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
        const exercise = {
          coursename: this.state.coursename,
          review: this.state.review,
          date: this.state.date
        }
    
        console.log(exercise);
        axios.post('http://localhost:5000/courseReview/add', exercise)
            .then(res => console.log(res.data));
    
       
      }


    render() {
        return (
             <div>
                <h3>Create New Course Review </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Course name: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.coursename}
                        onChange={this.onChangeCoursename}>
                        {
                            this.state.courses.map(function(course) {
                            return <option 
                                key={course}
                                value={course}>{course}
                                </option>;
                            })
                        }
                    </select>
                    </div>
                    <div className="form-group"> 
                    <label>Review: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.review}
                        onChange={this.onChangeReview}
                        />
                    </div>
                    <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Create Course" className="btn btn-primary" />
                    </div>
                </form>
                </div>
        );
    }
}