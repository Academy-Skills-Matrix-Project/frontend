import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Rating from '../Rating/Rating';


class DisplaySkills extends Component {
    
    
    
    render() {
        return (
            <>
                <Container fluid>
                   <Row className='text-center' > 
                        <Col lg={3} md={12} xs ={12}>
                            <a href='/'>
                                <img
                                src='EditPencil.png'
                                alt='Pencil'
                                width={50}

                                />
                             </a>
                                <p className= 'd-inline'>
                                     {this.props.skill}
                                </p>
                        </Col>
                        <Col lg={3} md={12} xs={12} className='my-auto'>
                            <Rating /> 
                        </Col>

                    </Row>
                </Container>
            </>
        )
    }
}

export default DisplaySkills;