import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Legal = () => {
    return (
        <Container style={{paddingTop: '150px'}}>
            <Row>
                <h2>Privacy Policy</h2>
            </Row>
            <Row>
                <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit hijk solutions (the “Site”).</p>
                <b>PERSONAL INFORMATION WE COLLECT</b>
                <p>We do not collect any data about you or use any cookies.</p>
                <b>CHANGES</b>
                <p>We may update this privacy policy from time to time for personal, operational, legal, or regulatory reasons.</p>
                <b>CONTACT US</b>
                <p>For more information about our privacy practices or if you have questions, please contact us by email at your-email@example.com.</p>
            </Row>
        </Container>
    )
};

export default Legal;