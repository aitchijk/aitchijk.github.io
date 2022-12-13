import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './page.css';
import './Team.css';
import team from '../data/team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import content from '../data/content';

const Team = () => {
    return (
        <section className='page-section alternate' id='team'>
            <Container>
                <Row>
                    <Col className='lg-12 text-center'>
                        <h2 className='section-heading text-uppercase'>{content.team.heading.name}</h2>
                        <h3 className='section-subheading text-muted'>{content.team.subheading.name}</h3>
                    </Col>
                </Row>
                <Row>
                    {team.map((person, i) => {
                        return(
                            <Col key={i} className='sm-4 team-member text-center'>
                                <a href={person.link}>
                                    <img
                                        alt={person.name}
                                        className='mx-auto rounded-circle'
                                        src={person.image}
                                    />
                                </a>
                                <h4>{person.name}</h4>
                                <p className='text-muted'>{person.role}</p>
                                <Row className='justify-content-center'>
                                    <Button
                                        href='#twitter'
                                        className='rounded-logo'
                                        variant='dark'
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Button>
                                    <Button
                                        href='#facebook'
                                        className='rounded-logo'
                                        variant='dark'
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Button>
                                    <Button
                                        href='#linkedin'
                                        className='rounded-logo'
                                        variant='dark'
                                    >
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </Button>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
};

export default Team;