import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Rater from '../Rating/Rating';
import './SkillRow.css';
import "react-widgets/styles.css";
import ComboBox from 'react-widgets/Combobox';


class SkillRow extends React.Component {

    constructor(props){
        super(props);
        this.removeSkillRow = this.removeSkillRow.bind(this);

        this.state = {
            skills: []
        }
    }

    componentDidMount(){
        fetch("https://cohort3skillsmatrix.azurewebsites.net/Skills/GetAll")
        .then((res) => res.json())
        .then((result) => { 
            this.setState({skills: result});
         },
            (error) => { alert(error); console.log(error); }
        )
        
    }

    removeSkillRow(){
        this.props.removeSkillRow(this.props.id);
    }
    render(){

        const skillTitles = this.state.skills.map(skill => skill.title);
        return (
            <Container fluid className='position-relative mt-4 bg-light border rounded shadow-sm' data-testid='skill-row-container'>

                    {/* Renders image for red 'X' button in top left of item  */}
                    <button 
                    onClick={this.removeSkillRow}
                    className='position-absolute top-0 start-0 translate-middle bg-transparent border-0' >
                        <img  
                            src="/Cancel.png"
                            width={30}
                            alt='delete row'
                            data-testid='delete-button'
                            />
                    </button>

                <Row data-testid='skill-row' className='py-1 text-center justify-content-center w-100'>  
                    {/* Renders 'I am proficent in' text */}
                    <Col lg={3} md={12} xs={12} className='justify-content-center align-items-center' >
                        <h5 className='px-3 pt-2'>I am proficient in...</h5>
                    </Col>

                    {/* Renders the category dropdown menu and text field */}
                    <Col lg={6} xs={6} className='d-flex mx-auto justify-content-center align-items-center'>
                        <ComboBox 
                        className='textfield w-50 mx-1 text-start' 
                        data-testid='skill-text-input'
                        hideEmptyPopup 
                        placeholder='Select skill' 
                        data={skillTitles}
                        />
                        {/* <Form.Control className="textfield form-control border border-2 w-75 m-2" type="input" data-testid='skill-text-input'/> */}
                    </Col>

                    {/* Renders star rating item */}
                    <Col lg={3} md={12} xs={12}>
                        <Rater toolTipShown={true}/>
                    </Col>       
                </Row>
            </Container>
        
            );
        }
    }
export default SkillRow;