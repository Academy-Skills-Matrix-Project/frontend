import React from 'react';
import {Accordion} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo';
import SkillsPage from './SkillsPage';
import LanguagesPage from './LanguagesPage';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import NavHeader from '../Components/NavHeader/NavHeader';

function UserInfo() {
    return(
        <div>
            <NavHeader isLogoutEnabled={true}/>
            <Accordion>
                <AccordionItem>
                    <AccordionHeader>Personal Information</AccordionHeader>
                    <AccordionBody>
                        <GeneralInfo />
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default UserInfo;