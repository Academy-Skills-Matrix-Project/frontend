import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import AppButton from '../Button/Button';



function LandingForm(){
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                <h1 className="h3 fw-bold">Sign in</h1>
                </Col>
            </Row>
            {/* form row */}
            <Form data-testid="sign-in-form" className="mt-5 mx-5">
                <Form.Group as={Row} className="mb-3 mx-auto" controlId="formHorizontalEmail">
                    <Form.Label column xs={6} md={4} className="fs-3 fw-bold text-end" data-testid="email-label">
                    Email
                    </Form.Label>
                    <Col xs={6} md={4}>
                    <Form.Control className="form-control form-control-lg border border-3" type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 mx-auto" controlId="formHorizontalPassword">
                    <Form.Label column xs={6} md={4} className="fs-3 fw-bold  text-end" data-testid="password-label">
                    Password
                    </Form.Label>
                    <Col xs={6} md={4}>
                    <Form.Control className="form-control form-control-lg border border-3" type="password" placeholder="Enter Password" />
                    </Col>
                </Form.Group>
            </Form>
            {/* button row */}
            <Row>
                <Col>
                    <AppButton title="Sign-in"/>
                </Col>
            </Row>
            {/* Forgot Password */}
            <Row className="mt-3">
                <Col>
                    <a href="" className="fs-6 fw-bold fst-italic text-center text-decoration-none">Forgot Password?</a>
                </Col>
            </Row>
        </Container>
    )
}

 export default LandingForm;

 