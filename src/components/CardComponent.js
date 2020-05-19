import React from 'react';
import {  Card, Badge } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
const CardComponent = (props) => {
    var name = props.name
    var url = props.url
    var description = props.description
    var technology = props.technology

    description = description.replace("(portfolio)", " ")

    return (
        <div >

            <Card className="text-left border border-dark" >
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Badge pill variant="primary">
                            {technology}
                                </Badge>{' '}</Card.Subtitle>
                    <Card.Text>
                        {description}
                             </Card.Text>
                    <footer className="footer-right">
                        <Card.Link href={url} target="_blank">
                            View On Github
                            <BoxArrowUpRight height="2em"/>
                        </Card.Link>

                    </footer>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardComponent