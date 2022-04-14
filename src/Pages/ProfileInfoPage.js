import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavHeader from '../Components/NavHeader/NavHeader';
import Button from '../Components/Button/Button';
import Banner from '../Components/Banner/Banner';
import DisplaySkills from '../Components/ProfilePageRow/DisplaySkills';
 

class ProfileInfoPage extends React.Component {
    render() {
        return (
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={true} isMyAccountEnabled={false} />
               <Container fluid>
                   <Row>
                       <Col className= 'mt-4 text-start ms-4'>
                       <h3 data-testid='profile-title'>My Profile</h3>
                       </Col>
                       <Col className= 'text-end mt-1 me-1'>
                       <Button  title='Edit Profile' page='ProfilePageEdit'  />
                       </Col>
                   </Row>
                   <Row>
                       <Col className= "text-center" xs={12} lg={4} >
                            <img src= 'ProfilePic.png'
                                 alt= 'Profile'
                                 width={250}/>
                            <h3 data-testid="name-title">Full Name</h3>
                        </Col>
                       <Col className="mt-5 mx-auto text-start" xs={5} lg={4}>
                            <h3 data-testid="email-title">Email:</h3>
                            <h3 data-testid="mobile-title">Mobile Number:</h3>
                            <h3 data-testid="location-title">Location/Time zone:</h3>
                       </Col>
                       <Col className="mt-5 mx-auto text-start" xs={5} lg={4}>
                            <h3 data-testid='department-title'>Department:</h3>
                            <h3 data-testid='team-title'> Team:</h3>
                            <h3 data-testid='job-title'>Job Title:</h3>
                       </Col>
                   </Row>
                   
                   <Row>
                       <Col>
                        <Banner title="About Me"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Pellentesque habitant morbi tristique senectus et netus et. Ut consequat semper viverra nam libero justo. Pretium lectus quam id leo. Adipiscing vitae proin sagittis nisl. Enim facilisis gravida neque convallis a cras semper auctor neque. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Sed egestas egestas fringilla phasellus. Sit amet justo donec enim diam vulputate ut pharetra. Malesuada fames ac turpis egestas sed tempus urna et. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Ut placerat orci nulla pellentesque dignissim. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Massa tempor nec feugiat nisl pretium fusce id. Placerat orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dignissim convallis aenean et tortor."/>
                       </Col>
                   </Row>
                   {/* <Row className="mt-5">
                   <Col md={3} className="ms-4">
                            <img src="EditPencil.png" alt="pencil" width={50} /> 
                            <p class="d-inline">Mirosoft 365</p> 
                       </Col>
                       <Col md={3}>
                            <Rating />
                       </Col>
                   </Row> */}
                   <Container fluid className="mt-5  mb-5 me-5 ">
                    <Row className='mx-auto'>
                   <Col xs={6} lg={5} className=' mx-auto'>
                    <Container className= 'text-start mb-3'>
                    <h3>Skills</h3>
                    </Container>
                   <DisplaySkills skill="Microsoft Azure"/>
                   <DisplaySkills skill="C#"/>
                   <DisplaySkills skill="C#"/>
                   </Col>
                   <Col xs={6} lg={5} className=' mx-auto'>
                    <Container className='text-start mb-3'>
                   <h3>Languages</h3>
                   </Container>
                   
                   <DisplaySkills skill="C#"/>
                   <DisplaySkills skill="JavaScript"/>
                   <DisplaySkills skill="C#"/>
                   
                   </Col>
                   </Row>
                   </Container>
               </Container>
            </>
        );
    }
}
 
export default ProfileInfoPage;
