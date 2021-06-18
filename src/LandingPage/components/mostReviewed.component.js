import { Card } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardGroup from 'react-bootstrap/CardGroup';


export default function review()
{
    return(
        <Jumbotron>
            <h1>
                Most Reviewed Schools
            </h1>
            <CardGroup>

                <Card>
                    <Card.Body>
                        <Card.Title>
                            Texas A&M University
                        </Card.Title>
                        <Card.Text>
                            Gig Em
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>
                            University of Texas at Austin
                        </Card.Title>
                        <Card.Text>
                            Hook Em
                        </Card.Text>
                    </Card.Body>
                </Card>

            </CardGroup>
        </Jumbotron>
    );
}