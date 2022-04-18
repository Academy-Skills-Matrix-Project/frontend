import React, {Component} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const userList = [
    {
        id: 1,
        firstname: "Jonathan",
        lastname: 'Amaya',
        topSkill: 'React',
        topLanguage: 'Java',
        location: 'Atlanta, GA',
        timeZone: 'EST',
        jotTitle: 'Application Developer'
    },
    {
        id: 2,
        firstname: "Tom",
        lastname: 'Brady',
        topSkill: 'Communication',
        topLanguage: 'Python',
        location: 'Tampa, Florida',
        timeZone: 'EST',
        jotTitle: 'Consultant'
    },

];

export default function SearchPageRow() {

        return(
            <Container 
            fluid
            style={{maxHeight:100, maxWidth:900}}
            hoverable='true' 
            data-testid='search-row' 
            className="bg-light border border-2 rounded border shadow-sm my-3 position-relative justify-content-center" >

                    <a href="/myaccount" to="/myaccount"><img
                    width={55} 
                    className="position-absolute start-0 top-50 translate-middle 
                    border border-2 rounded-circle bg-light  " 
                    src="MyAccount.png" 
                    alt="Profile" />
                    </a>

                    <a href='/myaccount' to='/myaccount'><img 
                    src="Info2.png"
                    width={22}
                    className="position-absolute end-0 top-0"
                    alt='More Info'
                    /></a>
                <Row  className=" justify-content-center align-items-center mx-1" >
                    <Col lg={3} xs='auto' className="w-auto">
                        <Row lg={12} xs={7}>
                        <Form.Label className="fs-5 fw-bold">First Name</Form.Label>
                        </Row>
                        <Row lg={12} xs={7}>
                        <Form.Label className="fs-5 fw-bold">Last Name</Form.Label>
                        </Row>     
                    </Col>
                    <Col lg={3} xs='auto' className="w-auto text-start">
                        <Row lg={12}>
                            <Form.Label className="fs-6"><strong>Top Skill: </strong> Communication</Form.Label>
                        </Row>
                        <Row lg={12}>
                            <Form.Label className="fs-6"><strong>Top Language: </strong>React + bootstrap</Form.Label>
                        </Row>
                    </Col> 
                    <Col  lg={3} className="d-none d-lg-block w-auto text-start">
                        <Row lg={12}>
                            <Form.Label className="fs-6"><strong>Job Title: </strong>Junior Application Developer </Form.Label>
                        </Row>
                        <Row lg={12}>
                            <Form.Label className="fs-6"><strong>Location / Time Zone: </strong>Atlanta, Georgia (EST)</Form.Label>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        );  
}
