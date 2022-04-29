import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LanguageRow from '../Components/Rows/LanguageRow';
import LanguageList from '../Components/Rows/LanguagesList';
import CircleButtonL from '../Components/Button/CircleButtonL';

export default class LanguagesPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {languageRows: [<LanguageRow id={0} key={Date.now()}/>, <LanguageRow id={0} key={Date.now() + 1}/>]}
        this.addLanguageRow = this.addLanguageRow.bind(this);
        this.removeLanguageRow = this.removeLanguageRow.bind(this);
    }    

    addLanguageRow(item){
        this.setState((prevState) => {
            return{
                languageRows: prevState.languageRows.concat(<LanguageRow key={item.key} id={item.id}/>)

            }
        })
    }

    removeLanguageRow(id){
        const languages = this.state.languageRows.filter(element => element.props.id !== id);
        this.setState({languageRows: languages});
    }
    
    render(){
        return (
            <>   
                <Container fluid className="mt-5">                       
                    <Row className = 'text-center mb-4'> 
                    <h3>Coding Languages and Proficiency</h3>
                    </Row>
                    <Container className= 'border-bottom border-top border-4 border-dark pb-5 '>
                            <LanguageList languageRows ={this.state.languageRows} removeLanguageRow={this.removeLanguageRow}/>
                    </Container>

                    {/* Renders bottom divider with 'add' button */}
                    <Container className='position-relative text-center '>
                        <CircleButtonL data-testid='plus-button' addLanguageRow= {this.addLanguageRow} ref={(a) => this._inputElement = a} />
                    </Container>
                    
                    {/* <Container className='text-center mt-5'>
                        <AppButton title="Save" page="LanguagePage" />
                    </Container> */}
                
                </Container>
                    
                
            </>
        );
    
    }
}