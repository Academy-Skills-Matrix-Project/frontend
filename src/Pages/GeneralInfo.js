import React from 'react';
import { Form, Col, Row, Container} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';



let schema = yup.object().shape({
    firstName: yup.string().required("First Name is required").matches(/^[a-zA-Z]+$/g, "First Name is letters only"),    
    lastName: yup.string().required("Last Name is required").matches(/^[a-zA-Z]+$/g, "Last Name is letters only"),
    jobTitle: yup.string().required("Job Title is required").matches(/^[a-zA-Z]+$/g, "Job Title is letters only"),
    location: yup.string().required("Location is required").matches(/^[ A-Za-z0-9_@.,/#&+-]*$/, "Location is letters only"),
    team: yup.string().required("Team is required").matches(/^[a-zA-Z]+$/g, "Team is letters only"),
    timeZone: yup.string().required("Must choose a Time Zone"),
    email: yup.string().email().required("Email is required").matches(/^[A-Za-z0-9._%+-]+@softwareone.com$/, "Invalid format"),
    mobileNumber: yup.string().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Not a vaild format."),
    
})


function GeneralInfo(props){

    let firstname = '';
    let lastname = '';

    const user = props.user;
    
        let name = user?.fullName;
        let fullNameTrim = name?.trim(); // from php
        let tmpArray = fullNameTrim?.split(' '); //split the name to an array
        lastname = tmpArray?.pop(); // pop the last element of the aray and store it in "lastname" variable
        firstname = tmpArray?.join(' '); // join the array to make first and middlename and sto
    
    
    
    return (
        <div className="mt-5">
            <Formik
                enableReinitialize
                initialValues={{
                    firstName: firstname,
                    lastName: lastname,
                    jobTitle: user.jobTitle,
                    department: user.department,
                    team:user.team,
                    location: user.location,
                    mobileNumber: user.phoneNumber,
                    email: user.email,
                    timeZone: user.timeZone,
                    aboutMe: user.aboutMe
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                    alert("Form is validated and in this block api call should be made..");
                    }
                }
            >

            {({
                handleSubmit,
                handleChange,            
                values,                
                errors, 
            }) => (
                <Container data-testid="general-info">
                    <Form noValidate onSubmit={handleSubmit}>                                  
                        <Row className="mb-3">
                            <Col xs={12} sm={12} md={4} className="mb-sm-4 text-center">
                            <h3>Name</h3>
                            </Col>
                            <Form.Group as={Col} controlId="formGridFirst" className="text-start" xs={6} sm={6} md={4}>
                                <Form.Label data-testid= 'fName-label' className= 'redAsterisks'>First Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="firstName"
                                placeholder='Enter First Name'
                                defaultValue={values.firstName}
                                onChange={handleChange}                                
                                isInvalid={!!errors.firstName}                                  
                                />
                                <Form.Control.Feedback  type="invalid">{errors.firstName}</Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridLast" className="text-start" xs={6} sm={6} md={4}>
                                <Form.Label data-testid="lName-label" className= 'redAsterisks'>Last Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="lastName"
                                placeholder="Enter Last Name"
                                defaultValue={values.lastName}
                                onChange={handleChange}                                
                                isInvalid={!!errors.lastName}
                                 />
                                <Form.Control.Feedback  type="invalid">{errors.lastName}</Form.Control.Feedback>

                            </Form.Group>   
                        </Row>
                        <hr style= {{height: 3}}/>
                        <Row className="mb-3 ">
                            <Col xs={{span:8, order:5}} sm={{span:8, order:5}} md={{span:4, order:0}}>
                            </Col>
                            <Form.Group as={Col} controlId="formGridJobT" className="text-start" xs={{span:6, order: 1}} sm={{span:6, order: 1}} md={{span:4, order:1}}>
                                <Form.Label data-testid="jTitle-label" className= 'redAsterisks'>Job Title</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="jobTitle"
                                    placeholder="Enter Job Title"
                                    defaultValue={values.jobTitle}
                                    onChange={handleChange}                                   
                                    isInvalid={!!errors.jobTitle}
                                     />
                                <Form.Control.Feedback  type="invalid">{errors.jobTitle}</Form.Control.Feedback>

                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridDepartment" className="text-start" xs={{span:6, order: 2}} sm={{span:6, order: 2}} md={{span:4, order:2}}>
                                <Form.Label data-testid="lTitle-label" className= 'redAsterisks'>Location</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="location"
                                    placeholder="Enter Location"
                                    value={values.location}
                                    onChange={handleChange}                                    
                                    isInvalid={!!errors.location}
                                     />
                                <Form.Control.Feedback  type="invalid">{errors.location}</Form.Control.Feedback>

                            </Form.Group> 

                            <Col xs={{span:12, order:0}} sm={{span:12, order: 0}} md={{span:4, order:3}} className='text-center'>
                            <h3>Job</h3>
                            </Col>
                            <Form.Group as={Col} controlId="formGridTeam" className="text-start mt-3" xs={{span:6, order:3}} sm={{span:6, order:3}} md={{span:4, order:4}}>
                                <Form.Label data-testid="tTitle-label"className= 'redAsterisks'>Team</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="team"
                                    placeholder="Enter Team Name" 
                                    defaultValue={values.team}
                                    onChange={handleChange}                                    
                                    isInvalid={!!errors.team}                                    
                                    />
                                <Form.Control.Feedback  type="invalid">{errors.team}</Form.Control.Feedback>

                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridLast" className="text-start mt-3" xs={{span:6, order:4}} sm={{span:6, order:4}} md={{span:4, order:5}}>
                                <Form.Label data-testid="tzTitle-label" className= 'redAsterisks'>Time Zone</Form.Label>
                                <Form.Select
                                    name="timezone"
                                    placeholder=""
                                    value={values.timeZone}
                                    onChange={handleChange}                                    
                                    isInvalid={!!errors.timeZone}                                    
                                >
                                    <option>Select a Time Zone</option>
                                    <option value="1">(GMT) Greenwich Mean Time</option>
                                    <option value="2">(UTC) Universal Coordinated Time</option>
                                    <option value="3">(ECT) European Central Time</option>
                                    <option value="4">(EET) Eastern European Time</option>
                                    <option value="5">(ART) (Arabic) Egypt Standard Time</option>
                                    <option value="6">(EAT) Eastern African Time</option>
                                    <option value="7">(MET) Middle East Time</option>
                                    <option value="8">(NET) Near East Time</option>
                                    <option value="9">(PLT) Pakistan Lahore Time</option>
                                    <option value="10">(IST) India Standard Time</option>
                                    <option value="11">(BST) Bangladesh Standard Time</option>
                                    <option value="12">(VST) Vietnam Standard Time</option>
                                    <option value="13">(CTT) China Taiwan Time</option>
                                    <option value="14">(JST) Japan Standard Time</option>
                                    <option value="15">(ACT) Australia Central Time</option>
                                    <option value="16">(AET) Australia Eastern Time</option>
                                    <option value="17">(SST) Solomon Standard Time</option>
                                    <option value="18">(NST) New Zealand Standard Time</option>
                                    <option value="19">(MIT) Midway Islands Time</option>
                                    <option value="20">(HST) Hawaii Standard Time</option>
                                    <option value="21">(AST) Alaska Standard Time</option>
                                    <option value="22">(PST) Pacific Standard Time</option>
                                    <option value="23">(PNT) Phoenix Standard Time</option>
                                    <option value="24">(MST) Mountain Standard Time</option>
                                    <option value="25">(CST) Central Standard Time</option>
                                    <option value="EST">(EST) Eastern Standard Time</option>
                                    <option value="27">(IET) Indiana Eastern Standard Time</option>
                                    <option value="28">(PRT) Puerto Rico and US Virgin Islands Time</option>
                                    <option value="29">(CNT) Canada Newfoundland Time</option>
                                    <option value="30">(AGT) Argentina Standard Time</option>
                                    <option value="31">(BET) Brazil Eastern Time</option>
                                    <option value="32">(CAT) Central African Time</option>
                                </Form.Select>  
                                <Form.Control.Feedback  type="invalid">{errors.timeZone}</Form.Control.Feedback>
                 
                            </Form.Group>  
                        </Row>
                        
                        <hr style= {{height: 3}}/>
                        <Row className="mb-3 ">
                            <Col xs={12} sm={12} md={4} className="mb-sm-4 text-center">
                            <h3>Contact <br></br> Information</h3>
                            </Col>
                            <Form.Group as={Col} controlId="formGridEmail" className="text-start" xs={6} sm={6} md={4}>
                                <Form.Label data-testid='email-Label' className= 'redAsterisks'>Email</Form.Label>
                                <Form.Control 
                                    
                                    type="email" 
                                    name="email"
                                    placeholder="@softwareone.com"
                                    defaultValue={user.email}
                                    onChange={handleChange}                                    
                                    isInvalid={!!errors.email}
                                     />
                                <Form.Control.Feedback  type="invalid">{errors.email}</Form.Control.Feedback>

                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridMobile" className="text-start" xs={6} sm={6} md={4}>
                                <Form.Label data-testid= 'mNumber-label' >Mobile Number</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="mobileNumber"
                                    placeholder="Enter Phone #" 
                                    defaultValue={values.mobileNumber}
                                    onChange={handleChange}                                   
                                    isInvalid={!!errors.mobileNumber}                                    
                                    />
                                <Form.Control.Feedback  type="invalid">{errors.mobileNumber}</Form.Control.Feedback>

                            </Form.Group>   
                        </Row>
                        <hr style= {{height: 3}}/>

                        <Row className="mb-3">
                            <Col md={4} className="mb-sm-4 mt-3 text-center">
                            <h3>About Me</h3>
                            </Col>
                            <Form.Group as={Col} controlId="formGridFirst" md={8} lg={8}>
                            <   Form.Control as="textarea" rows={4} defaultValue={values.aboutMe} placeholder='Tell us about yourself!!'/>
                            </Form.Group>

                        </Row>
                    </Form>
                </Container>
                )}
            </Formik>
        </div>

    )
}

export default GeneralInfo;