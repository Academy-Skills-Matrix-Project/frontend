import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Rater from '../Rating/Rating';
import CategoryDropdown from '../DropdownButton/CategoryDropdown';
import './SkillRow.css';

class SkillRow extends Component {
    render() {
        return (
            <>
                <Container fluid className='position-relative mt-3 bg-light border rounded shadow-sm' >

                      {/* Renders image for red 'X' button in top left of item  */}
                        <a className='position-absolute top-0 start-0' href='/' >
                            <img 
                                src="Cancel.png"
                                width={30}/>
                        </a>

                    <Row className='py-1 text-center justify-content-center align-items-center'>  
                        {/* Renders 'I am proficent in' text */}
                        <Col lg={3} md={12} xs={12} className='justify-content-center align-items-center' >
                            <h4 className='px-3'>I am proficient in...</h4>
                        </Col>

                        {/* Renders the category dropdown menu and text field */}
                        <Col lg={6} xs={6} className='d-flex mx-auto text-center justify-content-center'>
                            <CategoryDropdown />
                            <Form.Control className="textfield form-control border border-2 border-dark w-75 m-2" type="input"/>
                        </Col>

                        {/* Renders star rating item */}
                        <Col lg={3} md={12} xs={12}>
                            <Rater />
                        </Col>       
                    </Row>
                </Container>
            </>
        );
    }
}
export default SkillRow;