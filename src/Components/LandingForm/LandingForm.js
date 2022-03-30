import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import FormButton from './Button/FormButton';
import './LandingForm.css';

function LandingForm(){
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                <h1>Sign in</h1>
                </Col>
            </Row>
            {/* form row */}
            <Row className=" align-items-center">
                <Col xs={7} className="m-auto">
                    <Form data-testid="sign-in-form" className="text-align-center">
                        <Form.Group as={Row} className="m-auto"  controlId="formHorizontalEmail">
                            <Col sm={10} className="d-flex justify-content-center align-items-center">
                                <Form.Label column sm={2} className="">
                                    Email
                                </Form.Label>
                                <Form.Control className="w-50 p-3 h-25" type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="m-auto" controlId="formHorizontalPassword">
                            <Col sm={10} className="d-flex justify-content-center align-items-center">
                                <Form.Label column sm={2} className="text-align-right">
                                    Password
                                </Form.Label>
                                <Form.Control className="w-50 p-3 h-25" type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            {/* button row */}
            <Row>
                <Col>
                    <FormButton/>
                </Col>
            </Row>
        </Container>
    )
}

 export default LandingForm;