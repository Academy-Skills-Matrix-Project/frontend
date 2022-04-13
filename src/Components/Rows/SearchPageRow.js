import React, {Component} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class SearchPageRow extends Component{
    render(){
        return(
            <Container 
            fluid
            style={{maxHeight:100}}
            hoverable  
            className="bg-light border border-2 rounded border shadow-sm my-3 position-relative justify-content-center" >

                    <a><img
                    width={40} 
                    className="position-absolute start-0 top-50 translate-middle 
                    border border-2 rounded-circle bg-light w-auto " src="MyAccount.png" />
                    </a>

                    <a><img 
                    src="Info2.png"
                    width={22}
                    className="position-absolute end-0 top-0"
                    /></a>
                <Row  className="justify-content-center align-items-center mx-1" >
                    <Col lg={3} xs='auto' className="w-auto">
                        <Row lg={12} xs={7}>
                        <Form.Label className="fs-5 fw-bold">First name</Form.Label>
                        </Row>
                        <Row lg={12} xs={7}>
                        <Form.Label className="fs-5 fw-bold">Last name</Form.Label>
                        </Row>     
                    </Col>
                    <Col lg={3} xs='auto' className="w-auto">
                        <Row xs='auto' className="align-items-center">
                            <Col xs='auto' >
                            <Form.Label className="fs-6">Top Skill: </Form.Label>
                            </Col>
                            <Col xs='auto'>
                            <Form.Label className="fs-6">Communication</Form.Label>
                            </Col>
                        </Row>
                        <Row xs='auto' className="text-right">
                            <Col xs='auto' className="">
                            <Form.Label className="fs-6">Top Language: </Form.Label>
                            </Col>
                            <Col xs='auto' className="">
                            <Form.Label className="fs-6">React + bootstrap</Form.Label>
                            </Col>
                        </Row>
                    </Col> 
                    {/* <Col className="">
                        <Form.Label className="fs-5">Top Language: React + bootstrap</Form.Label>
                    </Col> */}
                    <Col  lg={3} className="d-none d-lg-block w-auto">
                        <Row lg={12}>
                        <Form.Label className="fs-6">Job Title: Junior Application Developer </Form.Label>
                        </Row>
                        <Row lg={12}>
                        <Form.Label className="fs-6">Location / Time Zone: Atlanta, Georgia (EST)</Form.Label>
                        </Row>
                        
                    </Col>
                    {/* <Col  lg={3} className="d-none d-lg-block w-auto">
                        <Row lg={12}>
                        <Form.Label className="fs-6">Location / Time Zone: </Form.Label>
                        </Row>
                        <Row lg={12}>
                        <Form.Label className="fs-6">Atlanta, Georgia (EST)</Form.Label>
                        </Row>
                    </Col> */}
                    
                </Row>
            </Container>
            
        );
    }
        
    
}

export default SearchPageRow;