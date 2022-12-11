import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header = () => {
    return (
        <header className='masthead'>
            <Container>
                <Row className='intro-text justify-content-center'>
                    <Row className='intro-lead-in justify-content-center'>
                        Helping Small Businesses Grow!
                    </Row>
                    <Row className='intro-heading justify-content-center'>
                        HIJK SOLUTIONS
                    </Row>
                    <Row className='justify-content-center'>
                        <Col>
                            <Button className='header-btn'>
                                TELL ME MORE
                            </Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </header>
    )
};

export default Header;