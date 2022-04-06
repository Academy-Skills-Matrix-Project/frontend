import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Banner() {
    return (
        <Container fluid className="mt-3">
            <Row>
                <Col>
                    <Card className="border border-4">
                        <Card.Body className="text-start px-3 pt-0">
                            <Card.Title className="mb-4 fs-2 fw-bold">Welcome to the Skill Matrix</Card.Title>
                            <Card.Text className="fs-5" data-testid="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Morbi tristique senectus et netus et malesuada fames ac. Sodales neque sodales ut etiam sit amet nisl purus in. Posuere ac ut consequat semper viverra nam libero justo. Nunc mattis enim ut tellus elementum sagittis vitae et. A lacus vestibulum sed arcu non odio euismod lacinia at. Amet volutpat consequat mauris nunc congue. Maecenas ultricies mi eget mauris pharetra et. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;

