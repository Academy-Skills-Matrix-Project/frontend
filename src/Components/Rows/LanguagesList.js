import React from "react";
import { Container } from "react-bootstrap";
import LanguageRow from "./LanguageRow";

export default class LanguageList extends React.Component{
    render(){

        let languageArray = []
        let tempLanguages = JSON.parse(localStorage.getItem('usersLanguages'));
        languageArray = tempLanguages;
        return(
            <Container>
                {languageArray.map(language =>
                    <LanguageRow 
                        language={language}
                        key= {language.id}
                        id={language.id}
                        removeLanguageRow={this.props.removeLanguageRow} />
                      )}
            </Container>
        );
    }
}