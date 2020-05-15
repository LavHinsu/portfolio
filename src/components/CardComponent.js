import React from 'react';
import { CardColumns, Card, Badge } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
const CardComponent = (props) => {

    var name = props.name
    var url = props.url
    var description = props.description
    var technology = props.technology
    return (
        <div >

            <Card className="text-left">
                <Card.Body>
                    <Card.Title>Repo Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Badge pill variant="primary">
                            technology
                                </Badge>{' '}</Card.Subtitle>
                    <Card.Text>
                        Description of the repo. can be as long as it needs to be
                             </Card.Text>
                    <footer className="footer-right">
                        <Card.Link href="#">
                            View on Github
                            <BoxArrowUpRight height="2em"/>
                        </Card.Link>

                    </footer>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardComponent