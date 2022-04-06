import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Rater from '../Rating/Rating';
import CategoryDropdown from '../DropdownButton/CategoryDropdown';
import './SkillRow.css';

class SkillRow extends Component {
    render() {
        return (
            <>
                <Container fluid className=' mt-3 bg-light border rounded' >
                    <Row 
                        className='py-1 text-center justify-content-center align-items-center'
                    >  
                        <Col lg={4} md={12} xs={12} className='d-flex justify-content-center align-items-center' >
                            <a href='/' >
                                <img className='border-end border-1 border-dark p-1'
                                    src="Cancel.png"
                                    width={40}/>
                                </a>
                            <h4 className='px-3'>I am proficient in...</h4>
                        </Col>
                        
                        <Col lg={2} xs={6} className='mx-auto'>
                            <CategoryDropdown />
                        </Col>
                        
                        <Col lg={3} xs={6} >   
                            <Form.Control className="form-control border border-2 border-dark w-75 mx-auto" type="input"/>
                        </Col>
                        
                        <Col lg={3} md={12} xs={12} >
                            <Rater />
                        </Col>       
                    </Row>
                </Container>
            </>
        );
    }
}
export default SkillRow;