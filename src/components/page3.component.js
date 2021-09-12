import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class AddSchool extends Component {
    constructor(props) {
        super(props);

        this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            school_name: '',
            location: ''
        }
    }

    // componentDidMount() {
    //     axios.get('https://coursarama-backend.herokuapp.com/course/')
    //       .then(response => {
    //         if (response.data.length > 0) {
    //           this.setState({
    //             courses: response.data.map(course => course.coursename),
    //             coursename: response.data[0].coursename
    //           })
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    
    //   }
    
    onChangeSchoolName(e)
    {
        this.setState({
            school_name: e.target.value
        });
    }

    onChangeLocation(e)
    {
        this.setState({
            location: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
        const school = {
          schoolname: this.state.school_name,
          location: this.state.location,
        }
    
        console.log(school);
        axios.post('https://coursarama-backend.herokuapp.com/school/add', school)
            .then(res => console.log(res.data));

        this.setState({
            school_name: '',
            location: ''
        })
      }


    render() {
        return (
             <div>
                <h3>Create School </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>School name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.school_name}
                        onChange={this.onChangeSchoolName}
                        />
                    </div>
                    <div className="form-group"> 
                    <label>Location: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.location}
                        onChange={this.onChangeLocation}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                    <input type="submit" value="Create School" className="btn btn-primary" />
                    </div>
                </form>
                </div>
        );
    }
}