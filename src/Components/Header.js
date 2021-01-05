import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



function Header() {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#212121" , marginBottom: 42}}>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ width: "60%" }} fill className="m-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#home">ABOUT</Nav.Link>
                        <Nav.Link href="#home">ROOMS</Nav.Link>
                        <Nav.Link href="#home">SERVICES</Nav.Link>
                        <Nav.Link href="#home">GALLERY</Nav.Link>
                        <Nav.Link href="#home">SEE &amp; DO</Nav.Link>
                        <Nav.Link href="#home">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>


                <Nav className="m-auto">
                    <Nav.Link>
                        <Button variant="outline-dark" style={{ color: "#FFFFFF" , borderColor: "#FFFFFF", borderRadius: 0}}>Book A Room</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

const navLinkStyle = {

}

export default Header;