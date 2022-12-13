import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import content from '../data/content';

const Services = () => {
    return (
        <section className='page-section alternate' id='services'>
            <Container>
                <Row >
                    <Col className='lg-12 text-center'>
                        <h2 className='section-heading text-uppercase'>{content.services.heading.name}</h2>
                        <h3 className='section-subheading text-muted'>{content.services.subheading.name}</h3>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={4}>
                    {content.services.items.map((service, i) => {
                        return(
                            <Col key={i} className='text-center justify-content-center'>
                                <i className='service-logo'><FontAwesomeIcon icon={service.pic} /></i>
                                <h4>{service.name}</h4>
                                <p className='mx-3'>{service.text}</p>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
};

export default Services;