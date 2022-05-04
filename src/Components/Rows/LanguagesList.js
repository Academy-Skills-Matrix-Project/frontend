import React from "react";
import { Container } from "react-bootstrap";
import LanguageRow from "./LanguageRow";

export default function LanguageList(props){
    
    const {languagesArray} = props
    
    return(
        <Container>
            {languagesArray.map(language =>{
                return(
                <LanguageRow 
                    language={language}
                    key= {language.id}
                    id={language.id}
                    removeLanguageRow={props.removeLanguageRow}
                    handleSave={props.handleSave} />
                    )
                })}
                
        </Container>
    );
    
}