import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Accordion} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo';
import SkillsPage from './SkillsPage';
import LanguagesPage from './LanguagesPage';
import NavHeader from '../Components/NavHeader/NavHeader';
import AppButton from '../Components/Button/Button';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './UserInfo.css';

function UserInfo(props) {
    let {id, selectedId} = useParams();
    const [user, setUser] = useState([]);
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
    return(
        <div>
            <NavHeader isLogoutEnabled={true} isSearchEnabled={true} id={id}/>
            <Container className="mt-5">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Personal Information</Accordion.Header>
                        <Accordion.Body>
                            <GeneralInfo user={user} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Skills</Accordion.Header>
                        <Accordion.Body>
                            <SkillsPage selectedId={selectedId} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Languages</Accordion.Header>
                        <Accordion.Body>
                            <LanguagesPage selectedId={selectedId} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>                
            <Container className= 'text-center'>
                <Row>
                    <Col className= 'mb-3 mt-5'>
                        <Link to={`/profilepage/${id}/${selectedId}`}>
                            <AppButton title='Save' data-testid="general-button" type="submit"/>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserInfo;