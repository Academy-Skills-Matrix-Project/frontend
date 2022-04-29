import React from "react";
import { Container } from "react-bootstrap";
import LanguageRow from "./LanguageRow";

export default class LanguageList extends React.Component{
    render(){
        return(
            <Container>
                {this.props.languageRows.map(language =>
                    <LanguageRow 
                      key= {language.key}
                      id={language.props.id}
                      removeLanguageRow={this.props.removeLanguageRow} />
                      
                      )}
            </Container>
        );
    }
}