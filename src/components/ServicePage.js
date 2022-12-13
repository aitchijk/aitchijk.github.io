import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css';
import { getServiceSlug } from '../data/utils';
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    return getServiceSlug(params.serviceSlug);
}

const ServicePage = () => {
    const service = useLoaderData();
    console.log(service)

    return (
        <Container style={{paddingTop: '150px'}}>
            <Row >
                <Col className='lg-12 text-center'>
                    <h2 className='section-heading text-uppercase'>{service[0].page.heading}</h2>
                    <h3 className='section-subheading text-muted'>{service[0].page.subheading}</h3>
                </Col>
            </Row>
            <Row>
                <Col className='text-center justify-content-center'>
                    <p>{service[0].page.text}</p>
                </Col>
            </Row>
        </Container>
    )
};

export default ServicePage;