import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Banner(props) {
    return (
        <Container fluid className="mt-3">
            <Row>
                <Col>
                    <Card className="border border-4" data-testid="banner">
                        <Card.Body className="text-start px-3 pt-0">
                            <Card.Title className="mb-4 fs-2 fw-bold">{props.title}</Card.Title>
                            <Card.Text className="fs-5" data-testid="banner-text">{props.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;

