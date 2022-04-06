import React, {Component} from 'react';
import { Form, Col, Row, Container} from 'react-bootstrap';
import Button from '../Button/Button';
import NavHeader from '../NavHeader/NavHeader';

function GeneralInfo(){
    return (
        <div>
            <NavHeader isLogoutEnabled={true}/>
           <Container fluid data-testid="general-info">
            <Row>
                    <Col>
                        <h1 className= 'text-start h2'>Personal Information</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="border">
            <Form>
                
                <Row className="mb-3 ">
                    <Col>
                    <h2>Name</h2>
                    </Col>
                    <Form.Group as={Col} controlId="formGridFirst">
                        <Form.Label>First Name</Form.Label>
                    <Form.Control type="first" placeholder="First Name" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last" placeholder="Last name" />
                    </Form.Group>   
                </Row>
                <hr />
                <Row className="mb-3 ">
                    <Col>
                    <h2></h2>
                    </Col>
                    <Form.Group as={Col} controlId="formGridJobT">
                        <Form.Label>Job Title</Form.Label>
                    <Form.Control type="job" placeholder="Enter Job Title" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="department" placeholder="Enter Department" />
                    </Form.Group>   
                </Row>
                <Row className="mb-3">
                    <Col>
                    <h2>Job</h2>
                    </Col>
                    <Form.Group as={Col} controlId="formGridTeam">
                        <Form.Label>Team</Form.Label>
                    <Form.Control type="team" placeholder="Enter Team Name" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridLast">
                    <Form.Label>Location/Time Zone</Form.Label>
                    <Form.Select type="last" placeholder="Last name">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    
                    </Form.Group>   
                </Row>
                <hr />
                <Row className="mb-3 ">
                    <Col>
                    <h2>Contact Information</h2>
                    </Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="@softwareone.com" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="mobile" placeholder="Enter Phone #" />
                    </Form.Group>   
                </Row>
                <hr />

                <Row className="mb-3">
                    <Col>
                    <h2>About Me</h2>
                    </Col>
                    <Form.Group as={Col} controlId="formGridFirst" lg={8}>
                    <Form.Control as="textarea" rows={4} placeholder='Tell us about yourself!!'/>
                    </Form.Group>

                </Row>
            </Form>
            </Container>
        <Button title='Continue' data-testid="general-button" />
        </div>

    )
}

export default GeneralInfo;