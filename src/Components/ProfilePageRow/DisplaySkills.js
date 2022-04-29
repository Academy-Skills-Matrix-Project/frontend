import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Rating from '../Rating/Rating';


class DisplaySkills extends Component {
    
    
    render() {
        return (
            <>
                <Container xs='auto' className='border-bottom' >
                   <Row className='align-items-center text-center textmd-start me-5 mb-1 py-1'  data-testid='display-skills' >
                        <Col md={6} xs={12} className=''>
                            <h5 className= '' >
                                {this.props.skill}
                            </h5>
                        </Col>
                        <Col md={6} xs={12} className='text-center text-md-end'>
                            <Rating hoverable={false} editable={false}  /> 
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default DisplaySkills;