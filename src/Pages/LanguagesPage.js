import React, { useState } from 'react';
import AppButton from '../Components/Button/Button';
import NavHeader from '../Components/NavHeader/NavHeader';
import { Container, Row } from 'react-bootstrap';
import LanguageRow from '../Components/Rows/LanguageRow';
import LanguageList from '../Components/Rows/LanguagesList';
import CircleButton from '../Components/Button/CircleButton';
import { number } from 'yup';



export default class LanguagesPage extends React.Component {

        constructor(props){
            super(props);
            this.state = {languageRows: []}
            console.log(this.state.languageRows)
            this.addLanguageRow = this.addLanguageRow.bind(this);
            this.removeLanguageRow = this.removeLanguageRow.bind(this);
        }    
    
        addLanguageRow(item){
            {console.log(item)}
            this.setState((prevState) => {
                return{
                    languageRows: prevState.languageRows.concat(<LanguageRow key={item.key} id={item.id}/>)

                }
            })
        }

        removeLanguageRow(id){
            {console.log(id)}
            const languages = this.state.languageRows.filter(element => element.props.id !== id);
            this.setState({languageRows: languages});
        }
    
    
    

        
    render(){
        return (
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={false} />      
                    <Container fluid>
                       <Row
                       style={{display:'flex', justifyContent:'left'}}
                       >
                            <h2 className='p-2 fw-bold text-start mb-5'>Personal Information</h2>
                       </Row>
                       <Row className = 'text-center'> 
                       <h1>Languages and Proficiency</h1>
                       </Row>
                       <Container className= 'border-bottom border-top border-4 border-dark pb-5 '>
                            {console.log(this.state.languageRows)}
                             <LanguageList languageRows ={this.state.languageRows} removelangaugeRow={this.removeLanguageRow}/>
                           
                       </Container>

                       {/* Renders bottom divider with 'add' button */}
                <Container className='position-relative text-center '>
                    <CircleButton data-testid='plus-button' addLanguageRow= {this.addLanguageRow} ref={(a) => this._inputElement = a} />
                </Container>
                       
                        <Container className='text-center mt-5'>
                            <AppButton title="Save" page='LanguagePage'/>
                        </Container>
                    
                    </Container>
                    
                
            </>
        );
    
    }
}