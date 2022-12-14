import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './NavbarSticky.css';
import content from '../data/content';

const NavbarSticky = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
            <Container>
                <Navbar.Brand className='navbar-brand' href='/'>
                    <img
                        src={content.navbar.brand.pic}
                        width='60'
                        alt='HIJK Solutions logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse className='navbar-link justify-content-end' id='basic-navbar-nav'>
                    <Nav>
                        {content.navbar.links.map((link, i) => {
                            return(
                                <Nav.Link key={i} href={link.href}>{link.name}</Nav.Link>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarSticky;