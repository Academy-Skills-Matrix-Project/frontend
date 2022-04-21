import React from "react";
import { Container } from "react-bootstrap";
import SkillRow from "./SkillRow";

export default class SkillsList extends React.Component{

    // constructor(props){
    //     super(props);
    //     console.log(props.skillRows)
    // }


    render(){
        return(
            <Container>
                {console.log(this.props.skillRows)}
                {this.props.skillRows.map(skill => 
                    <SkillRow 
                    key={skill.key} 
                    id={skill.props.id}
                    removeSkillRow={this.props.removeSkillRow} />
                
                )}
                
                
            </Container>
        );
    }
}