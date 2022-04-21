import React, {useEffect, useState} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function SearchPageRow(props) {
    let jobTitle = '';
    let topSkill = '';
    let topLanguage = '';
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

    let fullname = props.fullName; // from php
    let tmpArray = fullname.split(' '); //split the name to an array
    const lastname = tmpArray.pop(); // pop the last element of the aray and store it in "lastname" variable
    const firstname = tmpArray.join(' '); // join the array to make first and middlename and sto
    
        return(
            <Container
            fluid
            style={{maxHeight:100, maxWidth:900}}
            hoverable='true' 
            data-testid='search-row' 
            className="border border-2 rounded border shadow-sm my-3 position-relative" >

                    <a href="/myaccount" to="/myaccount"><img
                    width={55} 
                    className="position-absolute start-0 top-50 translate-middle 
                    border border-2 rounded-circle bg-light  " 
                    src="MyAccount.png" 
                    alt="Profile" />
                    </a>

                    <a href='/myaccount' to='/myaccount'><img 
                    src="Info2.png"
                    width={22}
                    className="position-absolute end-0 top-0"
                    alt='More Info'
                    /></a>
                <Row className="justify-content-start align-items-center mx-3" >
                    <Col lg={4} md={5} xs='auto' className="w-auto">
                        <Row lg={12} xs={7}>
                        <Form.Label className="fs-5 fw-bold">{firstname}</Form.Label>
                        </Row>
                        <Row lg={12} xs={7}>
                        <Form.Label className="fs-5 fw-bold">{lastname}</Form.Label>
                        </Row>     
                    </Col>
                    <Col lg={4} md={7} xs='auto' className="w-auto text-start">
                        <Row lg={12}>
                            <Form.Label className="fs-6"><strong>Top Skill:</strong> {topSkill}</Form.Label>
                        </Row>
                        <Row lg={12}>
                            <Form.Label className="fs-6"><strong>Top Language: </strong>{topLanguage}</Form.Label>
                        </Row>
                    </Col> 
                    <Col  lg={4} className="d-none d-lg-block w-auto text-start">
                        <Row lg={12}>
                            <Form.Label className="fs-6"><strong>Job Title: </strong>{jobTitle}</Form.Label>
                        </Row>
                        <Row lg={12}>
                            <Form.Label className="fs-6"><strong>Location / Time Zone: </strong>{`${props.location} (${props.timeZone})`}</Form.Label>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

