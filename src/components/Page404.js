import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useRouteError } from "react-router-dom";

const Page404 = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <Container style={{paddingTop: '150px'}}>
            <Row className='text-center'>
                <h1>404 - Page not found</h1>
                <p>Looks like the page you're trying to reach doesn't exist.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </Row>
        </Container>
    )
};

export default Page404;