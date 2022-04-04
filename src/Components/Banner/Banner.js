import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Banner() {
    return (
        <Container fluid className="mt-3">
            <Row>
                <Col>
                    <Card className="border border-4">
                        <Card.Body className="text-start px-3 pt-0">
                            <Card.Title className="mb-4 fs-4 fw-bold">Skills Matrix Abstract</Card.Title>
                            <Card.Text className="fs-5" data-testid="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;

