import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class Page1 extends Component {
    constructor(props) {
        super(props);

        this.onChangeCoursename = this.onChangeCoursename.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            coursename: '',
            description: '',
            date: new Date(),
            courses: []
        }
    }

    onChangeCoursename(e)
    {
        this.setState({
            coursename: e.target.value
        });
    }

    onChangeDescription(e)
    {
        this.setState({
            description: e.target.value
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
          description: this.state.description,
          duration: this.state.duration,
          date: this.state.date
        }
    
        console.log(exercise);
        axios.post('http://localhost:5000/courseReview/add', exercise)
            .then(res => console.log(res.data));
    
        window.location = '/';
      }


    render() {
        return (
             <div>
                <h3>Create New Course </h3>
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
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
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