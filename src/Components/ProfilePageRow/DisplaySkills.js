import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Rating from '../Rating/Rating';


class DisplaySkills extends Component {
    
    
    
    render() {
        return (
            <>
                <Container  >
                   <Row className='text-start me-5 ' data-testid='display-skills' > 
                        <Col lg={2} md={4} sm ={4} xs={3} className="mb-3 ">
                           
                            <a href='/'>
                                <img
                                src='EditPencil.png'
                                alt='Pencil'
                                width={50}
                                className= ""

                                />
                             </a>
                        </Col>     
                             <Col lg={6} md={4} sm={4} xs={6} className='mt-2'>
                                <h5 className= '' >
                                     {this.props.skill}
                                </h5>
                                </Col>
                        <Col lg={4} md={4} sm={4} xs={12} className=''>
                            <Rating /> 
                        </Col>

                    </Row>
                </Container>
            </>
            
        )
    }
}

export default DisplaySkills;