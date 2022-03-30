import React from 'react';
import { Form, Container, Row, Col, Button  } from 'react-bootstrap';

const LandingForm = () => {
    return (
        <Container>
            <Row>
                <Col>
                <h1>Sign in</h1>
                </Col>
            </Row>
            {/* form row */}
            <Row>
                <Col>
                    <Form data-testid="sign-in-form">
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Password
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

 export default LandingForm;