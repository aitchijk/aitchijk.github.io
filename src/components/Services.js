import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
    return (
        <section className='page-section alternate' id='services'>
            <Container>
                <Row >
                    <Col className='lg-12 text-center'>
                        <h2 className='section-heading text-uppercase'>Services</h2>
                        <h3 className='section-subheading text-muted'>Lorem ipsum</h3>
                    </Col>
                </Row>
                <Row xs={1} md={3}>
                    <Col className='text-center justify-content-center'>
                        <i className='service-logo'><FontAwesomeIcon icon={faTwitter} /></i>
                        <h4>E-Commerce</h4>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </Col>
                    <Col className='text-center'>
                        <i className='service-logo'><FontAwesomeIcon icon={faFacebookF} /></i>
                        <h4>Responsive Design</h4>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </Col>
                    <Col className='text-center'>
                        <i className='service-logo'><FontAwesomeIcon icon={faLinkedinIn} /></i>
                        <h4>Markdown</h4>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Services;