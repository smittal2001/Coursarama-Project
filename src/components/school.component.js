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
            courses: [[]]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/course/get/'+this.props.match.params.schoolID)
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
        console.log(this.state.courses);
    }
   
    render() {
        return (
            <div>
                {this.state.courses.map( course => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> {course[0]}</Card.Title>
                            <Card.Text>
                                {course[2]}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text>{course[1]}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    }
}