import React, {Component} from 'react';
import axios from 'axios';

export default class Page2 extends Component {
    constructor(props) {
        super(props);

        this.onChangeCoursename = this.onChangeCoursename.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeProfessor = this.onChangeProfessor.bind(this);
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            coursename: '',
            description: '',
            professor: '',
            schoolID: '',
            schoolMap: new Map(),
            schoolList: [],
            schoolName: ''
        }
        
    }

    componentDidMount() {
      this.state.schoolMap.clear();
      axios.get('https://coursarama-backend.herokuapp.com/school/')
        .then(response => {
          if (response.data.length > 0) {
            response.data.map(school => 
                this.state.schoolMap.set(school.schoolname,school._id.toString()))
            this.setState({
              schoolList: response.data.map(school => school.schoolname)
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
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

      onChangeSchool(e) {
        this.setState({
          schoolID: this.state.schoolMap.get(e.target.value),
          schoolName: e.target.value
        })
      }



      onSubmit(e) {
        e.preventDefault();
    
        const course = {
          coursename: this.state.coursename,
          description: this.state.description,
          professor: this.state.professor,
          schoolID: this.state.schoolID
        }
        console.log(course);
        axios.post('https://coursarama-backend.herokuapp.com/course/add', course)
            .then(res => console.log(res.data));
    
        this.setState({
          coursename: '',
          description: '',
          professor: '',
          schoolID: ''
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
              <label>School: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.schoolName}
                  onChange={this.onChangeSchool}>
                  {
                      this.state.schoolList.map(function(school) {
                        return <option 
                            key={school}
                            value={school}>{school}
                            </option>;
                        })
                  }
              </select>
              <br></br>
              <div className="form-group">
                <input type="submit" value="Create Course" className="btn btn-primary" />
              </div>
            </form>
          </div>
        );
    }
}