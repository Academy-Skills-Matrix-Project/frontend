import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavHeader from '../Components/NavHeader/NavHeader';
import Button from '../Components/Button/Button';
import Banner from '../Components/Banner/Banner';
import DisplaySkills from '../Components/ProfilePageRow/DisplaySkills';
import './ProfilePage.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

 

function ProfileInfoPage(props) {

    const [user, setUser] = useState({});

    let {id} = useParams();
    console.log(props)
    console.log(id)

    useEffect(() => {
        const fetchUser = async () => {
            await fetch(`https://cohort3skillsmatrix.azurewebsites.net/Users/GetById/${id}`)
            .then((res) => res.json())
            .then((result) => { 
                setUser(result);
            });
            }
            fetchUser();
        }, [id]);


    return (
        <>
            <NavHeader isLogoutEnabled={true} isSearchEnabled={true} isMyAccountEnabled={false} />
            <Container fluid  >
                <Row>
                    <Col className= 'mt-4 text-start ms-4'>
                        {parseInt(id) === 20 ? (
                            <h3 data-testid='profile-title'>My Profile</h3>
                        ) : (
                            <></>
                        )}
                    
                    </Col>
                    <Col className= 'text-end mt-1 me-1'>
                        {parseInt(id) === 20 ? (
                            <Link to={`/generalinfo/${id}`}>
                                <Button  title='Edit Profile' />
                            </Link>
                        ) : (
                            <></>
                        )}
                        
                    </Col>
                </Row>
                <Row className='align-items-center'>
                    <Col className= "text-center " xs={12} lg={3} >
                        
                        <img src= '/ProfilePic.png'
                            alt= 'Profile'
                            width={200}
                            />
                        
                        <h3 className='' data-testid="name-title">{`${user.fullName}`}</h3>
                    </Col>
                    <Col className="mt-3 mt-lg-0 mx-auto text-center text-lg-start" xs={12} lg={5}>
                        <h4 data-testid="email-title"><strong>Email: </strong>{user.email}</h4>
                        <h4 data-testid="mobile-title"><strong>Phone Number: </strong>{user.phoneNumber}</h4>
                        
                    </Col>
                    <Col className=" mx-auto text-center text-lg-start" xs={12} lg={4}>
                        {/* <h3 data-testid='department-title'>Department:</h3>
                        <h3 data-testid='team-title'> Team:</h3> */}
                        <h4 data-testid='job-title'><strong>Job Title: </strong>{user.job}</h4>
                        <h4 data-testid="location-title"><strong>Location: </strong> {user.location}</h4>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                    <Banner  title="About Me"  text={user.aboutMe}/>
                    </Col>
                </Row>
                
                <Container fluid className="mt-5 mb-5  me-5 "  >
                    <Row className='mx-auto'>
                        <Col xs={12} lg={5} className=' mx-auto ' >
                            <Container className= 'text-start mb-2 '>
                                <Col className='d-flex align-items-center'>
                                    <h3><strong>Skills:</strong></h3>
                                </Col>
                            </Container>
                            <Container className= "addScroll">
                                <DisplaySkills skill="Microsoft Azure"/>
                                <DisplaySkills skill="Cloud platform expansion"/>
                            </Container>
                        </Col>
                        <Col xs={12} lg={5} className=' mx-auto'>
                            <Container className='text-start mb-2'>
                                <Col className='d-flex align-items-center'>
                                    <h3><strong>Languages:</strong></h3>
                                </Col>
                            </Container>
                            <Container className="addScroll">
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
 
export default ProfileInfoPage;
