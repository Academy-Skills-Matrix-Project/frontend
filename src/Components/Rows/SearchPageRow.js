import React, {useEffect, useState} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function SearchPageRow(props) {
    let jobTitle = '';
    let topSkill = '';
    let topLanguage = '';
    let firstname = '';
    let lastname = '';
    const [jobs, setJobs] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Jobs/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setJobs(result);
            });
            }
        const fetchSkills = async () => {
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setSkills(result);
             });
            }
        const fetchLanguages = async () => {
            await fetch("https://cohort3skillsmatrix.azurewebsites.net/Languages/GetAll")
            .then((res) => res.json())
            .then((result) => { 
                setLanguages(result);
                });
            }

        fetchLanguages();
        fetchJobs();
        fetchSkills();

    }, [])

    jobs.forEach(job => {
        if(job.jobId === props.jobId){
            jobTitle = job.title;
        }
    });
    skills.forEach(skill => {
        if(skill.skillId === props.skillId){
            topSkill = skill.title;
        }
    });
    languages.forEach(language => {
        if(language.languageId === props.languageId){
            topLanguage = language.title;
        }
    });

    if(props.fullName !== undefined){
        let fullname = props.fullName;
        let tmpArray = fullname.trim().split(' ');
        lastname = tmpArray.pop();
        firstname = tmpArray.join(' ');
    } else{
        firstname = 'Error'
        lastname = 'Loading data'
    }
    return(
        <Container
        fluid
        style={{maxHeight:100, maxWidth:900}}
        hoverable='true' 
        data-testid='search-row' 
        className="border border-2 rounded border shadow-sm my-3 position-relative" >

                <Link to={`/profilepage/${props.id}/${props.userId}`}>
                    <img
                        width={55} 
                        className="position-absolute start-0 top-50 translate-middle 
                        border border-2 rounded-circle bg-light  " 
                        src="/MyAccount.png" 
                        alt="Profile" />
                        </Link>

                <Link to={`/profilepage/${props.id}/${props.userId}`} >
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
                        <Form.Label className="fs-6" style={{textOverflow: 'ellipsis',overflow: 'hidden'}}><strong>Top Skill:</strong> {topSkill}</Form.Label>
                    </Row>
                    <Row lg={12}>
                        <Form.Label className="fs-6" style={{textOverflow: 'ellipsis',overflow: 'hidden'}}><strong>Top Language: </strong>{topLanguage}</Form.Label>
                    </Row>
                </Col> 
                <Col  lg={5} className="d-none d-lg-block text-start">
                    <Row lg={12}>
                        <Form.Label className="fs-6" style={{textOverflow: 'ellipsis',overflow: 'hidden'}}><strong>Job Title: </strong>{jobTitle}</Form.Label>
                    </Row>
                    <Row lg={12}>
                        <Form.Label className="fs-6" style={{textOverflow: 'ellipsis',overflow: 'hidden'}}><strong>Location / Time Zone: </strong>{`${props.location} (${props.timeZone})`}</Form.Label>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

