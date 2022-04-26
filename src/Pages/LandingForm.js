import React from 'react';
import { Form, Container, Row, Col,} from 'react-bootstrap';
import './LandingForm';
import AppButton from '../Components/Button/Button';
import { Link, Route } from 'react-router-dom';
import NavHeader from '../Components/NavHeader/NavHeader';
import Banner from '../Components/Banner/Banner';
import { Formik } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
    email: yup.string().email().required("Email is required").matches(/^[A-Za-z0-9._%+-]+@softwareone.com$/, "Invalid format"),
    password: yup.string().required("Password is required").matches("12345") 
});

function LandingForm(){

    return (
        <>
        <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
        <Banner title='Welcome to the Skills Matrix' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Morbi tristique senectus et netus et malesuada fames ac. Sodales neque sodales ut etiam sit amet nisl purus in. Posuere ac ut consequat semper viverra nam libero justo. Nunc mattis enim ut tellus elementum sagittis vitae et. A lacus vestibulum sed arcu non odio euismod lacinia at. Amet volutpat consequat mauris nunc congue. Maecenas ultricies mi eget mauris pharetra et. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse.'/>
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="h3 fw-bold text-center">Sign in</h1>
                </Col>
            </Row>
            {/* form row */}
            <Formik
                initialValues={{
                    email:"",
                    password: "",
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                    alert("Form is validated and in this block api call should be made..");
                    }}
                    >

            {({
                handleSubmit,
                handleChange,
                handleBlur,
                isSubmitting,
                values,
                touched,
                errors, 
            }) => (
            <Form data-testid="sign-in-form" className="mt-5 mx-5" noValidate onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3 mx-auto" controlId="formHorizontalEmail">
                    <Form.Label column xs={6} md={4} className="fs-3 fw-bold text-end redAsterisks" data-testid="email-label">
                    Email
                    </Form.Label>
                    <Col xs={6} md={4}>
                    <Form.Control 
                    className="form-control form-control-lg border border-3"
                    type="email" 
                    name='email'
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.email}
                    isValid={touched.email && !errors.email} />
                   </Col>
                <Form.Control.Feedback  type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 mx-auto" controlId="formHorizontalPassword">
                    <Form.Label column xs={6} md={4} className="fs-3 fw-bold text-end redAsterisks" data-testid="password-label">
                    Password
                    </Form.Label>
                    <Col xs={6} md={4}>
                    <Form.Control 
                    className="form-control form-control-lg border border-3" 
                    type="password" 
                    name='password'
                    placeholder="Enter Password" 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.password}
                    isValid={touched.password && !errors.password}/>
                    </Col>
                <Form.Control.Feedback  type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
            </Form>
            )}
            </Formik>
            {/* button row */}
            <Row className="text-center">
                <Container>
                    <AppButton title="Sign-In" type='submit' page='LandingPage'/>
                </Container>
            </Row>
            {/* Forgot Password */}
            <Row className="mt-3">
                <Col className='text-center'>
                    <Link to='/forgotpassword' className="fs-5 fw-bold fst-italic text-center text-decoration-none">Forgot Password?</Link>
                    <Route path='/forgotpassword' component={() => {
                        window.location.replace('https://softwareone.service-now.com/sp/?id=it_index');
                        return null;
                    }} />
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

 export default LandingForm;

 