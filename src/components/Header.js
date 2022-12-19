import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Header.css';
import content from '../data/content';

const Header = () => {
    return (
        <header className='masthead'>
            <Container>
                <Row className='justify-content-center'>
                    <Row className='intro-lead-in justify-content-center'>
                        {content.header.leadIn.name}
                    </Row>
                    <Row className='intro-heading justify-content-center'>
                        {content.header.heading.name.substring(0,4)}
                        <span>{content.header.heading.name.substring(4)}
                        </span>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col>
                            <Button className='header-btn' href={content.header.btn.href}>
                                {content.header.btn.name}
                            </Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </header>
    )
};

export default Header;