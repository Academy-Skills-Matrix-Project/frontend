import React from 'react';
import {Container, Row, Col, Accordion} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo';
import SkillsPage from './SkillsPage';
import LanguagesPage from './LanguagesPage';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import NavHeader from '../Components/NavHeader/NavHeader';
import AppButton from '../Components/Button/Button';
import { useParams } from 'react-router-dom';

function UserInfo() {
    let {id} = useParams();
    console.log(id);

    return(
        <div>
            <NavHeader isLogoutEnabled={true} isSearchEnabled={true} id={id}/>
            <Container className="mt-5">
                <Accordion defaultActiveKey="0">
                    <AccordionItem eventKey="0">
                        <AccordionHeader>Personal Information</AccordionHeader>
                        <AccordionBody>
                            <GeneralInfo />
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <AccordionHeader>Skills</AccordionHeader>
                        <AccordionBody>
                            <SkillsPage />
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <AccordionHeader>Languages</AccordionHeader>
                        <AccordionBody>
                            <LanguagesPage />
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Container>                
            <Container className= 'text-center'>
                <Row>
                    <Col className= 'mb-3 mt-5'>
                        <AppButton title='Save' data-testid="general-button" type="submit" page="UserInfo"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserInfo;