import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SkillRow from "./SkillRow";

export default function SkillsList(props){

    const {skillsArray} = props
    const [key, setKey] = useState(1);
    // const [skillsArray, setSkillsArray] = useState(temp)
    // let x;
    // useEffect(() => {
    //     x = key++
    //     setKey(x)
    // }, [x])
    
   console.log(skillsArray)
        let i = 1;
        return(
            <Container>
                {skillsArray.map(skill => {
                    return(
                    <SkillRow 
                    skill={skill}
                    key={skill.id}
                    id={skill.id}
                    removeSkillRow={props.removeSkillRow} 
                    handleSave={props.handleSave}/>
                    )
                })}
                
                
            </Container>
        );
    
}