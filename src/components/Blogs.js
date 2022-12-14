import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './page.css';
import blogs from '../data/blogs';
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate();
    const cardOnClick = (slug) => {
        navigate(slug);
    };

    return (
        <Container style={{paddingTop: '150px'}}>
            <Row>
                <Col className='lg-12 text-center'>
                    <h2 className='section-heading text-uppercase'>{blogs.heading.name}</h2>
                    <h3 className='section-subheading text-muted'>{blogs.subheading.name}</h3>
                </Col>
            </Row>
            <Row style={{margin: 'auto'}}>
                {blogs.items.map((item, i) => {
                    return(
                        <Col className='my-2 d-flex justify-content-center' key={i}>
                            <Card onClick={() => {cardOnClick(item.slug)}} style={{ width: '20rem', cursor: "pointer" }}>
                                <Card.Img variant='top' src={item.pic} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle>{item.subtitle}</Card.Subtitle>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
};

export default Blogs;