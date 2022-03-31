import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import FormButton from '../Button/FormButton';


function LandingForm(){
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                <h1 className="h3 fw-bold">Sign in</h1>
                </Col>
            </Row>
            {/* form row */}
                <Form data-testid="sign-in-form" className="mt-5 me-5">
                    <Form.Group as={Row} className="mb-3 me-5 justify-content-center" controlId="formHorizontalEmail">
                        <Form.Label column sm={2} className="fs-3 fw-bold text-end" data-testid="email-label">
                        Email
                        </Form.Label>
                        <Col sm={3}>
                        <Form.Control className="form-control form-control-lg border border-3" type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 mt-4 me-5 justify-content-center" controlId="formHorizontalPassword">
                        <Form.Label column sm={2} className="fs-3 fw-bold" data-testid="password-label">
                        Password
                        </Form.Label>
                        <Col sm={3}>
                        <Form.Control  className="form-control form-control-lg border border-3" type="password" placeholder="Enter Password" />
                        </Col>
                    </Form.Group>
                </Form>
            {/* button row */}
            <Row>
                <Col>
                    <FormButton />
                </Col>
            </Row>
        </Container>
    )
}

 export default LandingForm;

 