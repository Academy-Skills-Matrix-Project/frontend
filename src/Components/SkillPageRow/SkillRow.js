import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Rater from '../Rating/Rating';
import CategoryDropdown from '../DropdownButton/CategoryDropdown';

class SkillRow extends Component {
    render() {
        return (
            <>
                <Container fluid className='mt-4'>
                    <Row className='display-inline-block justify-content-center align-items-center'>
                        <Col className='text-end' md='auto'>
                            <a><img src="Cancel.png" width={35}/></a>
                        </Col>
                        <Col className='text-center' md='auto'>
                            <h4>I am proficient in...</h4>
                        </Col>
                        <Col md='auto'>
                            <CategoryDropdown />
                        </Col>
                        <Col md='auto'>   
                            <Form.Control className="form-control border border-2 border-dark" type="input"/>
                        </Col>
                        <Col md='auto'>
                            <Rater />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default SkillRow;