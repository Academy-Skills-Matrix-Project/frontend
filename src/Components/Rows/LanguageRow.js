import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Rater from '../Rating/Rating';
// import CategoryDropdown from '../DropdownButton/CategoryDropdown';
import './SkillRow.css';
import "react-widgets/styles.css";
import ComboBox from 'react-widgets/Combobox';

 class LanguageRow extends React.Component {
    
    constructor(props){
        super(props);
        this.removeLanguageRow = this.removeLanguageRow.bind(this);

        this.state = {
            languages: []
        }
    }

    componentDidMount(){
         fetch("https://cohort3skillsmatrix.azurewebsites.net/Languages/GetAll")
        .then((res) => res.json())
        .then((result) => {
            this.setState({languages: result});
        },
        (error) => { alert(error); console.log(error); }
        )
    }

    removeLanguageRow(){
        this.props.removeLanguageRow(this.props.id);
    }
    
    render(){
    // const rand = Math.floor(Math.random() * 10 + 1)
    const languageTitles = this.state.languages.map(language => language.title);
    return (
        <Container fluid className='position-relative mt-4 bg-light border rounded shadow-sm ' data-testid='language-row'>
                    {/* Renders image for red 'X' button in top left of item  */}
                <button 
                onClick={this.removeLanguageRow}
                className= ' position-absolute top-0 start-0 translate-middle bg-transparent border-0 '>
                    <img  
                        src="/Cancel.png"
                        width={30}
                        alt='delete row'
                        data-testid='delete-button'
                        />
                </button>
                <Row data-testid='skill-row' className='py-1 text-center justify-content-center w-100'>
                    <Col lg={3} md={12} xs={12} className='justify-content-center align-items-center' >
                        <h5 className='px-3 pt-2'>I am proficient in...</h5>
                    </Col>
                    <Col lg={6} xs={6} className='d-flex mx-auto justify-content-center align-items-center'>
                        <ComboBox 
                        className='textfield w-50 mx-1 text-start' 
                        data-testid='language-text-input'
                        hideEmptyPopup 
                        placeholder={this.props.language.title}
                        data={languageTitles}
                        />
                        {/* <Form.Control className="textfield form-control border border-2 w-75 m-2" type="input" data-testid='skill-text-input'/> */}
                    </Col>
                    {/* Renders star rating item */}
                    <Col lg={3} md={12} xs={12}>
                        <Rater toolTipShown={true} hoverable={true} editable={true} level={this.props.language.level}/>
                    </Col>       
                </Row>
        </Container>
    );

    }
}
export default LanguageRow;