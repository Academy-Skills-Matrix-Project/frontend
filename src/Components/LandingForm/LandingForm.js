import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import './LandingForm.css';

function LandingForm(){
    return (
        <Container>
            <Row>
                <Col>
                <h1>Sign in</h1>
                </Col>
            </Row>
            {/* form row */}
            <Row className="border align-items-center">
                <Col xs={7} className="m-auto border border-success">
                    <Form data-testid="sign-in-form" className="border text-align-center border-primary">
                        <Form.Group as={Row} className="m-auto border border-danger"  controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control className="w-25 p-3 h-25 m-auto" type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="m-auto border border-danger" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control className="w-25 p-3 h-25" type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

 export default LandingForm;