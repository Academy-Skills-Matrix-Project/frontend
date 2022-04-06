import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Rater from '../Rating/Rating';
import CategoryDropdown from '../DropdownButton/CategoryDropdown';
import './SkillRow.css';

class SkillRow extends Component {
    render() {
        return (
            <>
                <Container fluid className=' mt-3 bg-light'>
                    <Row 
                        className='py-1 text-center justify-content-center align-items-center'
                    >  
                        <Col lg={4} md={12} xs={12} className='bg-success d-flex justify-content-center align-items-center' >
                            <a href='/' >
                                <img className='border-end border-1 border-dark p-1'
                                    src="Cancel.png"
                                    width={40}/>
                                </a>
                            <h4 className='px-3'>I am proficient in...</h4>
                        </Col>
                        
                        <Col lg={2} md={6} xs={5} className='bg-warning'>
                            <CategoryDropdown />
                        </Col>
                        
                        <Col lg={3} md={6} xs={7} className='bg-danger'>   
                            <Form.Control className="form-control border border-2 border-dark w-75" type="input"/>
                        </Col>
                        
                        <Col lg={3} md={12} xs={12} className='bg-secondary'>
                            <Rater />
                        </Col>       
                    </Row>
                </Container>
            </>
        );
    }
}
export default SkillRow;