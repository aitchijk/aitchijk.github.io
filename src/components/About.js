import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css';

const About = () => {
    return (
        <section className='page-section' id='about'>
            <Container>
                <Row>
                    <Col className='lg-12 text-center'>
                        <h2 className='section-heading text-uppercase'>About us</h2>
                        <h3 className='section-subheading text-muted'>our story</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='lg-8 mx-auto text-center text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default About;