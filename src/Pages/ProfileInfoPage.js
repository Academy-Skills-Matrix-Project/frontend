import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavHeader from '../Components/NavHeader/NavHeader';
import Button from '../Components/Button/Button';
import Banner from '../Components/Banner/Banner';
import DisplaySkills from '../Components/ProfilePageRow/DisplaySkills';
import './ProfilePage.css';
 

class ProfileInfoPage extends React.Component {
    render() {
        return (
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={true} isMyAccountEnabled={false} />
               <Container fluid="lg"  className="mt-4">
                   <Row>
                       <Col className= 'text-start ms-4'>
                       <h3 data-testid='profile-title' className="fw-bold">My Profile</h3>
                       </Col>
                       <Col className= 'text-end me-1'>
                       <Button  title='Edit Profile' page='ProfilePageEdit'  />
                       </Col>
                   </Row>
                   <Row>
                       <Col className= "text-center" xs={12} lg={4} >
                            <img src= 'ProfilePic.png'
                                 alt= 'Profile'
                                 width={250}/>
                            <h4 data-testid="name-title" className="fw-bold">Full Name</h4>
                        </Col>
                       <Col className="mt-5 mx-auto text-start" xs={5} lg={4}>
                            <h4 data-testid="email-title" className="fw-bold mb-3">Email:</h4>
                            <h4 data-testid="mobile-title" className="fw-bold mb-3">Mobile Number:</h4>
                            <h4 data-testid="location-title" className="fw-bold">Time Zone:</h4>
                       </Col>
                       <Col className="mt-5 mx-auto text-start" xs={5} lg={4}>
                            <h4 data-testid='department-title' className="fw-bold mb-3">Department:</h4>
                            <h4 data-testid='team-title' className="fw-bold mb-3"> Team:</h4>
                            <h4 data-testid='job-title' className="fw-bold">Job Title:</h4>
                       </Col>
                   </Row>
                   
                   <Row>
                       <Col>
                        <Banner  title="About Me"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Pellentesque habitant morbi tristique senectus et netus et. Ut consequat semper viverra nam libero justo. Pretium lectus quam id leo. Adipiscing vitae proin sagittis nisl. Enim facilisis gravida neque convallis a cras semper auctor neque. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Sed egestas egestas fringilla phasellus. Sit amet justo donec enim diam vulputate ut pharetra. Malesuada fames ac turpis egestas sed tempus urna et. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Ut placerat orci nulla pellentesque dignissim. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Massa tempor nec feugiat nisl pretium fusce id. Placerat orci nulla pellentesque dignissim enim. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Dignissim convallis aenean et tortor."/>
                       </Col>
                   </Row>
                 
                   <Container fluid className="mt-5  mb-5 me-5 "  >
                    <Row className='mx-auto'>
                   <Col xs={12} lg={5} className=' mx-auto ' >
                    <Container className= 'text-start mb-4'>
                    <h3>Skills</h3>
                    </Container>
                         <Container className= "addScroll mb-3">
                        <DisplaySkills skill="Microsoft Azure"/>
                        <DisplaySkills skill="Cloud platform expansion"/>
                
                        </Container>
                   </Col>
                   <Col xs={12} lg={5} className=' mx-auto'>
                    <Container className='text-start mb-4'>
                   <h3>Languages</h3>
                   </Container>
                   <Container className="addScroll ">
                   <DisplaySkills skill="C#"/>
                   <DisplaySkills skill="JavaScript"/>
                   <DisplaySkills skill="C#"/>
                   <DisplaySkills skill="C#"/>
                   <DisplaySkills skill="C#"/>
                   <DisplaySkills skill="C#"/>
                   <DisplaySkills skill="C#"/>
                   <DisplaySkills skill="C#"/>
                   </Container>
                   </Col>
                   </Row>
                   </Container>
               </Container>
            </>
        );
    }
}
 
export default ProfileInfoPage;
