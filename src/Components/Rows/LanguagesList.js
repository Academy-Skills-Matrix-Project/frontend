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
                    key= {language.languageId}
                    id={language.languageId}
                    removeLanguageRow={props.removeLanguageRow}
                    handleSave={props.handleSave} 
                    selectedId={props.selectedId}/>
                    )
                })}
                
        </Container>
    );
    
}