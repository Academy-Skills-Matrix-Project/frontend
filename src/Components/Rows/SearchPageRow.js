import React, { useState} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function SearchPageRow(props) {
    let topSkill = '';
    let topSkillObject = '';
    let topLanguageObject = '';
    let topLanguage = '';
    let firstname = '';
    let lastname = '';
    const [user] = useState(props.user)
    const [skills] = useState(props.skills);
    const [languages] = useState(props.languages);
    const [skillArray] = useState(props.skillArray);
    const [languageArray] = useState(props.languageArray);
    const [id] = useState(props.id)

    const skillsPerUser = skillArray.filter(skill => skill.userId === user.userId)
    const languagesPerUser = languageArray.filter(lang => lang.userId === user.userId)

    if(skillsPerUser.length > 0){
        topSkillObject = skillsPerUser.reduce(function(prev, current) {
            return (prev.skillLevel >= current.skillLevel) ? prev : current
        })
    }
    skills.forEach(skill => {
        if(skill.skillId === topSkillObject.skillId){
            topSkill = skill.title;
        }
    });

    if(languagesPerUser.length > 0){
        topLanguageObject = languagesPerUser.reduce(function(prev, current){
            return (prev.skillLevel >= current.skillLevel) ? prev : current
        })
    }
    languages.forEach(lang => {
        if(lang.languageId === topLanguageObject.languageId){
            topLanguage = lang.title;
        }
    });

    let fullname = user.fullName?.trim();
    let tmpArray = fullname?.split(' ');
    lastname = tmpArray?.pop();
    firstname = tmpArray?.pop();
    
        return(
            <Container
            fluid
            style={{maxHeight:100, maxWidth:900}}
            hoverable='true' 
            data-testid='search-row' 
            className="border border-2 rounded border shadow-sm my-3 position-relative" >

                <Link to={`/profilepage/${id}/${user.userId}`}>
                    <img
                        width={55} 
                        className="position-absolute start-0 top-50 translate-middle 
                        border border-2 rounded-circle bg-light  " 
                        src="/MyAccount.png" 
                        alt="Profile" 
                        /></Link>

                <Link to={`/profilepage/${id}/${user.userId}`} >
                    <img 
                        src="/Info2.png"
                        width={22}
                        className="position-absolute end-0 top-0"
                        alt='More Info'
                        /></Link>
                    
                <Row className="justify-content-start align-items-center mx-3" >
                    <Col lg={3} md={5} xs={4} className="text-start">
                        <Row lg={12} xs={7}>
                            <Form.Label 
                                className="fs-5 fw-bold"
                                data-testid='First Name'
                                style={{textOverflow: 'ellipsis',overflow: 'hidden'}}
                                >{firstname}
                            </Form.Label>
                        </Row>
                        <Row lg={12} xs={7}>
                            <Form.Label 
                                className="fs-5 fw-bold"  
                                data-testid='Last Name'  
                                style={{textOverflow: 'ellipsis',overflow: 'hidden'}}
                                >{lastname}
                            </Form.Label>
                        </Row>     
                    </Col>
                    <Col lg={4} md={7} xs={8} className="text-start">
                        <Row lg={12}>
                            <Form.Label 
                                className="fs-6" 
                                style={{textOverflow: 'ellipsis',overflow: 'hidden'}}>
                                <strong>Top Skill:</strong> {topSkill}
                                </Form.Label>
                        </Row>
                        <Row lg={12}>
                            <Form.Label className="fs-6" style={{textOverflow: 'ellipsis',overflow: 'hidden'}}><strong>Top Language: </strong>{topLanguage}</Form.Label>
                        </Row>
                    </Col> 
                    <Col  lg={5} className="d-none d-lg-block text-start">
                        <Row lg={12}>
                            <Form.Label className="fs-6" style={{textOverflow: 'ellipsis',overflow: 'hidden'}}><strong>Job Title: </strong>{user.jobTitle}</Form.Label>
                        </Row>
                        <Row lg={12}>
                            <Form.Label className="fs-6" style={{textOverflow: 'ellipsis',overflow: 'hidden'}}><strong>Time Zone: </strong>{`${user.location} (${user.timeZone})`}</Form.Label>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
   


