import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../images/logo/logo.png';



const Header = () => {
    return (
        <>
            <Navbar className='navbar-container' bg="warning" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{width:'40px',height:'40px'}} src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;
