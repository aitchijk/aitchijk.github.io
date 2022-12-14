import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css';
import { getBlogSlug } from '../data/utils';
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    return getBlogSlug(params.blogSlug);
};

const BlogPage = () => {
    const blog = useLoaderData();

    return (
        <Container style={{paddingTop: '150px'}}>
            <Row >
                <Col className='lg-12 text-center'>
                    <h2 className='section-heading text-uppercase'>{blog[0].title}</h2>
                    <h3 className='section-subheading text-muted'>{blog[0].subtitle}</h3>
                </Col>
            </Row>
            <Row>
                <Col className='text-center justify-content-center'>
                    <p>{blog[0].text}</p>
                </Col>
            </Row>
        </Container>
    )
};

export default BlogPage;