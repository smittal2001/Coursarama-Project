import React, {Component} from 'react';
import axios from 'axios';

export default class Page1 extends Component {
    constructor(props) {
        super(props);

        this.onChangeCoursename = this.onChangeCoursename.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeProfessor = this.onChangeProfessor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            coursename: '',
            description: '',
            professor: ''
        }
    }

    onChangeCoursename(e) {
        this.setState({
          coursename: e.target.value
        })
      }

      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }

      onChangeProfessor(e) {
        this.setState({
          professor: e.target.value
        })
      }



      onSubmit(e) {
        e.preventDefault();
    
        const course = {
          coursename: this.state.coursename,
          description: this.state.description,
          professor: this.state.professor

        }
    
        console.log(course);
        axios.post('http://localhost:5000/course/add', course)
            .then(res => console.log(res.data));
    
        this.setState({
          coursename: '',
          description: '',
          professor: ''
        })
      }
    

    render() {
        return (
            <div>
            <h3>Create New Course</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.coursename}
                    onChange={this.onChangeCoursename}
                    />
              </div>
              <br></br>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
              <br></br>
              <div className="form-group"> 
                <label>Professor: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.professor}
                    onChange={this.onChangeProfessor}
                    />
              </div>
              <br></br>
              <div className="form-group">
                <input type="submit" value="Create Course" className="btn btn-primary" />
              </div>
            </form>
          </div>
        );
    }
}