import React from 'react';
import { Form, Col, Row, Container} from 'react-bootstrap';
import Button from '../Button/Button';
import NavHeader from '../NavHeader/NavHeader';


function GeneralInfo(){
    return (
        <div>
            <NavHeader isLogoutEnabled={true}/>
           <Container fluid data-testid="general-info" className="mb-5 mt-3">
            <Row>
                    <Col>
                        <h1 className= 'text-start h2 fw-bold'>Personal Information</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
            <Form>
                
                <Row className="mb-3">
                    <Col xs={12} sm={12} md={4} className="mb-sm-4">
                    <h3>Name</h3>
                    </Col>
                    <Form.Group as={Col} controlId="formGridFirst" className="text-start" xs={6} sm={6} md={4}>
                        <Form.Label data-testid= 'fName-label' className= 'redAsterisks'>First Name</Form.Label>
                    <Form.Control type="first" placeholder="Enter First Name" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridLast" className="text-start" xs={6} sm={6} md={4}>
                    <Form.Label data-testid="lName-label" className= 'redAsterisks'>Last Name</Form.Label>
                    <Form.Control type="last" placeholder="Enter Last Name" />
                    </Form.Group>   
                </Row>
                <hr style= {{height: 3}}/>
                <Row className="mb-3 ">
                    <Col xs={8} sm={{span:8, order:5}} md={{span:4, order:0}}>
                    </Col>
                    <Form.Group as={Col} controlId="formGridJobT" className="text-start" xs={6} sm={{span:6, order: 1}} md={{span:4, order:1}}>
                        <Form.Label data-testid="jTitle-label" className= 'redAsterisks'>Job Title</Form.Label>
                    <Form.Control type="job" placeholder="Enter Job Title" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridDepartment" className="text-start" xs={6} sm={{span:6, order: 2}} md={{span:4, order:2}}>
                    <Form.Label data-testid="dTitle-label" className= 'redAsterisks'>Department</Form.Label>
                    <Form.Control type="department" placeholder="Enter Department" />
                    </Form.Group> 

                    <Col xs={12} sm={{span:12, order: 0}} md={{span:4, order:3}}>
                    <h3>Job</h3>
                    </Col>
                    <Form.Group as={Col} controlId="formGridTeam" className="text-start mt-3" xs={6} sm={{span:6, order:3}} md={{span:4, order:4}}>
                        <Form.Label data-testid="tTitle-label"className= 'redAsterisks'>Team</Form.Label>
                    <Form.Control type="team" placeholder="Enter Team Name" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridLast" className="text-start mt-3" xs={6} sm={{span:6, order:4}} md={{span:4, order:5}}>
                    <Form.Label data-testid="lTitle-label" className= 'redAsterisks'>Location/Time Zone</Form.Label>
                    <Form.Select>
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>                   
                    </Form.Group>  
                </Row>
                
                <hr style= {{height: 3}}/>
                <Row className="mb-3 ">
                    <Col xs={12} sm={12} md={4} className="mb-sm-4">
                    <h3>Contact <br></br> Information</h3>
                    </Col>
                    <Form.Group as={Col} controlId="formGridEmail" className="text-start" xs={6} sm={6} md={4}>
                        <Form.Label data-testid='email-Label' className= 'redAsterisks'>Email</Form.Label>
                    <Form.Control type="email" placeholder="@softwareone.com" />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridMobile" className="text-start" xs={6} sm={6} md={4}>
                    <Form.Label data-testid= 'mNumber-label' >Mobile Number</Form.Label>
                    <Form.Control type="mobile" placeholder="Enter Phone #" />
                    </Form.Group>   
                </Row>
                <hr style= {{height: 3}}/>

                <Row className="mb-3">
                    <Col md={4} className="mb-sm-4">
                    <h3>About Me</h3>
                    </Col>
                    <Form.Group as={Col} controlId="formGridFirst" md={8} lg={8}>
                    <Form.Control as="textarea" rows={4} placeholder='Tell us about yourself!!'/>
                    </Form.Group>

                </Row>
            </Form>
            </Container>
            <Container>
                <Row>
                    <Col className= 'mb-3'>
                        <Button title='Continue' data-testid="general-button"/>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default GeneralInfo;