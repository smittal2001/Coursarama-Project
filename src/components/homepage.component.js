import React, {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: [[]],
            schoolCourses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/school/')
          .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    schools: response.data.map(school => [school.schoolname, school.locations] ),
                })
                
            }
          })
          .catch((error) => {
            console.log(error);
          })
        //   console.log(this.state.schools)
    }
    render() {        
        return (
            <div> 
                <h1> Schools </h1>
                <br></br>
                <div>
                <Row xs="auto" md={2} className="g-4">
                    {this.state.schools.map( school => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title> {school[0]}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Text>{school[1]}</Card.Text>
                                <Card.Link href="#"> courses </Card.Link>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
                </div>
            </div>
        );
    }
}