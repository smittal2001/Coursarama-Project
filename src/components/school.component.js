import React, {Component} from 'react';
import {
    useParams
  } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [[]],
            schoolName: ""
        }
        
        
    }
    componentDidMount() {
        axios.get('https://coursarama-backend.herokuapp.com/course/get/'+this.props.match.params.schoolID)
        .then(response => {
            if(response.data.length > 0) {
                this.setState({
                    courses: response.data.map(course => [course.coursename, course.professor, course.description])
                })
            }
            else {
                console.log("no data");
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
   
    render() {
        const styleObj = {
            fontSize: 14,
            paddingTop: "10px"
        }
        return (
            <div>
                <h1> {this.props.match.params.name} Courses </h1>
                <br></br>
                {this.state.courses.map( course => (
                    <div>
                        <Card>
                            <Card.Header as="h4"> 
                                {course[0]}
                                <p style = {styleObj}> {course[1]} </p>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {course[2]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>
                    </div>
                ))}
            </div>
        );
    }
}