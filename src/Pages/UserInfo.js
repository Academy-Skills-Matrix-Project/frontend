import React from 'react';
import {Container, Row, Col, Accordion} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo';
import SkillsPage from './SkillsPage';
import LanguagesPage from './LanguagesPage';
import NavHeader from '../Components/NavHeader/NavHeader';
import AppButton from '../Components/Button/Button';
import './UserInfo.css';


function UserInfo() {
    return(
        <div>
            <NavHeader isLogoutEnabled={true} isSearchEnabled={true}/>
            <Container className="mt-5">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Personal Information</Accordion.Header>
                        <Accordion.Body>
                            <GeneralInfo />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Skills</Accordion.Header>
                        <Accordion.Body>
                            <SkillsPage />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Languages</Accordion.Header>
                        <Accordion.Body>
                            <LanguagesPage />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>                
            <Container className= 'text-center'>
                <Row>
                    <Col className= 'mb-3 mt-5'>
                        <AppButton title='Save'  type="submit" page="UserInfo"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserInfo;