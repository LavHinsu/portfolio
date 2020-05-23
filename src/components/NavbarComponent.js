import React from 'react';
import { Navbar, Nav, Modal, Button, Card, } from 'react-bootstrap'
import { BoxArrowUpRight } from 'react-bootstrap-icons';



const NavbarComponent = (props) => {



    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div >
            <Navbar bg="light" expand="lg" style={{ color: "blue" }} navbar-default="true" sticky="top">
                <Navbar.Brand style={{ fontSize: "xx-large", fontFamily: 'lato' }} href="/">Lav Hinsu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap');
                </style>
                    <Nav>
                        <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="/projects">Projects</Nav.Link>
                        <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="" onClick={() => setModalShow(true)}>Contact</Nav.Link>
                        <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="https://drive.google.com/file/d/18iUxWSAo3jVEVmrmJhB-pcGrYdIXVofd/view?usp=sharing" target="_blank" >Resume</Nav.Link>
                        <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="https://criodo.github.io/Crio-Launch-Feb-2020-hinsulav105/" target="_blank" >Backend Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}


function MyVerticallyCenteredModal(props) {

    var email = "hinsulav105@gmail.com"
    function mail() {
        window.location.href = `mailto:${email}`;
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contact Details
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    I love Open Source! let me know if you find good projects i could contribute to.
                    Anyways, here's my contact info if you're looking to get in touch! (currently looking for a full time position)
                </p>

                <span>Email : {email} </span>
                <Card.Link href="" target="_blank" onClick={mail}>
                    <BoxArrowUpRight height="2em" />
                </Card.Link>
                <p />
                <span>Github : Github.com/Lav-Hinsu </span>
                <Card.Link href="http://github.com/Lav-Hinsu" target="_blank">
                    <BoxArrowUpRight height="2em" />
                </Card.Link>
                <p />
                <span>LinkedIn : Linkedin.com/in/lavhinsu/ </span>
                <Card.Link href="https://www.linkedin.com/in/lavhinsu/" target="_blank">
                    <BoxArrowUpRight height="2em" />
                </Card.Link>
                <p />
                <span>Phone : +91 6353348131 </span>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default NavbarComponent