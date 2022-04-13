import React, {Component} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class SearchPageRow extends Component{
    render(){
        return(
            <Container 
            fluid
            style={{maxHeight:100, maxWidth:1000}}
            hoverable  
            className="bg-light border border-2 rounded border shadow-sm my-3 justify-content-center" >

                   
                <Row className="position-relative align-items-center justify-content-center d-flex">
                    
                    <a><img
                    width={40} 
                    className="position-absolute start-0 top-50 translate-middle 
                    border border-2  rounded-circle bg-light w-auto" src="MyAccount.png" />
                    </a>

                    <Col lg={3} sm='auto' className="w-auto">
                        <Row lg={12} xs={7}>
                        <Form.Label className="fs-5">First name</Form.Label>
                        </Row>
                        <Row lg={12} xs={7}>
                        <Form.Label className="fs-5">Last name</Form.Label>
                        </Row>     
                    </Col>
                    <Col lg={3} sm='auto' className="w-auto">
                        <Row>
                        <Form.Label className="fs-6">Top Skill: Communication</Form.Label>
                        </Row>
                        <Row>
                        <Form.Label className="fs-6">Top Language: React + bootstrapfnaifn</Form.Label>
                        </Row>
                    </Col>
                    {/* <Col className="">
                        <Form.Label className="fs-5">Top Language: React + bootstrap</Form.Label>
                    </Col> */}
                    <Col  lg={3} className="d-none d-lg-block w-auto">
                        <Row lg={12}>
                        <Form.Label className="fs-6">Job Title: </Form.Label>
                        </Row>
                        <Row lg={12}>
                        <Form.Label className="fs-6">Junior Application Developer</Form.Label>
                        </Row>
                        
                    </Col>
                    <Col  lg={3} className="d-none d-lg-block w-auto">
                        <Row lg={12}>
                        <Form.Label className="fs-6">Location / Time Zone: </Form.Label>
                        </Row>
                        <Row lg={12}>
                        <Form.Label className="fs-6">Atlanta, Georgia (EST)</Form.Label>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        );
    }
        
    
}

export default SearchPageRow;