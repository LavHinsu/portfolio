import React  from 'react';
import { Navbar, Nav, } from 'react-bootstrap'


const NavbarComponent = (props) => {
    return (

        <Navbar bg="light" expand="lg" style={{color:"blue"}} navbar-default sticky="top">
            <Navbar.Brand style={{ fontSize: "xx-large", fontFamily: 'lato' }} href="/">Lav Hinsu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap');
                </style>
                <Nav>
                    <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="/Projects">Projects</Nav.Link>
                    <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="/About">About Me</Nav.Link>
                    <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent