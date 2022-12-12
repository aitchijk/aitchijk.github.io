import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './NavbarSticky.css';

const NavbarSticky = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
            <Container>
                <Navbar.Brand className='navbar-brand' href='/'>hijk solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse className='navbar-link justify-content-end' id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/#about'>About</Nav.Link>
                        <Nav.Link href='/#team'>Team</Nav.Link>
                        <Nav.Link href='/#blog'>Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarSticky;