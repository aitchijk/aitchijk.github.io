import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css';
import content from '../data/content';

const About = () => {
    return (
        <section className='page-section' id='about'>
            <Container>
                <Row>
                    <Col className='lg-12 text-center'>
                        <h2 className='section-heading text-uppercase'>{content.about.heading.name}</h2>
                        <h3 className='section-subheading text-muted'>{content.about.subheading.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='lg-8 mx-auto text-center text-muted'>
                        {content.about.details.text}
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default About;