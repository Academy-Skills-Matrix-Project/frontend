import React from "react";
import { Container } from "react-bootstrap";
import SkillRow from "./SkillRow";

export default function SkillsList(props){

    const {skillsArray} = props;
    return(
        <Container>
            {skillsArray.map(skill => {
                return(
                <SkillRow 
                skill={skill}
                key={skill.skillId}
                id={skill.skillId}
                removeSkillRow={props.removeSkillRow} 
                handleSave={props.handleSave}
                selectedId={props.selectedId}/>
                )
            })}
            
            
        </Container>
    );
    
}