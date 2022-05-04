import React, {useState, useEffect} from 'react';
import { Form, Container, Row, Col, Button} from 'react-bootstrap';
import './LandingForm.css';
import { Link, Route, useHistory } from 'react-router-dom';
import NavHeader from '../Components/NavHeader/NavHeader';
import Banner from '../Components/Banner/Banner';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required").matches(/^[A-Za-z0-9._%+-]+@softwareone.com$/, "Invalid format, must be @softwareone.com"),
    password: Yup.string().required("Password is required"), 
});

function LandingForm(){
    const history = useHistory();
    var dbPassword = '';
    var currentUserId = -1;
    var path = '';
 
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://cohort3skillsmatrix.azurewebsites.net/Users/GetAll")
        .then((res) => res.json())
        .then((result) => { 
            setUsers(result);            
         },
            (error) => { alert(error); console.log(error); }
        )
    }, []);

    return (
        <>
        <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
        <Banner title='Welcome to the Skills Matrix' text='For SWO who aims to assess the technical skills of its employees, the Skills Matrix is an organizational tool that will save them hundreds of thousands of dollars and expedite the creation of their Technology Services team.'/>
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 data-testid='header' className="fs-2 fw-bold text-center">Sign In</h1>
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
                    try{
                        const lowerEmail = values.email.toLowerCase();
                        const inputUsername = users.filter((key) => key.email.toLowerCase().includes(lowerEmail));                       
                        dbPassword = inputUsername[0].password;
                        currentUserId = inputUsername[0].id;
                        path = '/searchpage/' + currentUserId;                     
                    
                        if(inputUsername.length !== 0){
                            if(dbPassword === values.password){
                                return history.push(path);
                            } else {
                                alert("Incorrect Password");
                            }
                        } else{ 
                            alert("No user found");
                        }
                    }catch(error){
                        alert("No user found");
                    }
                    }}
            >

            {({
                handleSubmit,
                handleBlur,
                handleChange,               
                isSubmitting,
                values,
                touched,
                errors,            
            }) => (
            <Form data-testid="sign-in-form" className="mt-5 mx-5" noValidate onSubmit={handleSubmit}>
            <input type="submit" style={{display: "none"}} />
                <Form.Group as={Row} className="mb-4 mx-auto align-items-center" controlId="formHorizontalEmail">
                    <Form.Label column xs={12} md={4} className="fs-4 fw-bold text-md-end redAsterisks" data-testid="email-label">
                    Email
                    </Form.Label>
                    <Col xs={12} md={6}>
                    <Form.Control 
                    size="lg"
                    type="email" 
                    name='email'
                    placeholder="@softwareone.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? "error" : null}
                     />
                   </Col>
                   {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ): null}
                </Form.Group>

                <Form.Group as={Row} className="mb-5css bold font mx-auto align-items-center" controlId="formHorizontalPassword">
                    <Form.Label column xs={12} md={4} className="fs-4 fw-bold text-md-end redAsterisks" data-testid="password-label">
                    Password
                    </Form.Label>
                    <Col xs={12} md={6}>
                    <Form.Control 
                    size="lg"
                    type="password" 
                    name='password'
                    placeholder="Enter Password" 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? "error" : null}                                
                    />
                    </Col>
                    {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ): null}
                </Form.Group> 
                {/* button row */}
            <Row className="text-center mt-3">
                <Container>
                    <Button       
                    data-testid="button"
                    title="Sign-In" 
                    type='submit' 
                    className='bg-danger btn border border-0'
                    > Submit 
                    </Button>
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
            </Form>
            )}
            </Formik>
            
        </Container>
        
        </>
    )
}

 export default LandingForm;

 