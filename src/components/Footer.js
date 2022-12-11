import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './page.css';
import './Team.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer class='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col className='md-6'>
                        <span className='copyright'>
                            Copyright &copy; hijk solutions 2022
                        </span>
                    </Col>
                    <Col className='md-6 legal'>
                        <a href='legal'>Privacy Policy</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;