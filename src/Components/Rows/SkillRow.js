import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Rater from '../Rating/Rating';
// import CategoryDropdown from '../DropdownButton/CategoryDropdown';
import './SkillRow.css';
import "react-widgets/styles.css";
import ComboBox from 'react-widgets/Combobox';
import DropdownList from 'react-widgets/DropdownList'

export default function SkillRow(props) {
    const {onRemove} = props;
    return (

            <Container fluid className='position-relative mt-4 bg-light border rounded shadow-sm' data-testid='skill-row-container'>

                    {/* Renders image for red 'X' button in top left of item  */}
                    <button className='position-absolute top-0 start-0 translate-middle bg-transparent border-0' >
                        <img  
                            src="Cancel.png"
                            width={30}
                            alt='delete row'
                            data-testid='delete-button'
                            onClick={() => onRemove()}
                            />
                    </button>

                <Row data-testid='skill-row' className='py-1 text-center justify-content-center'>  
                    {/* Renders 'I am proficent in' text */}
                    <Col lg={3} md={12} xs={12} className='justify-content-center align-items-center' >
                        <h4 className='px-3'>I am proficient in...</h4>
                    </Col>

                    {/* Renders the category dropdown menu and text field */}
                    <Col lg={6} xs={6} className='d-flex mx-auto justify-content-center align-items-center'>
                        <DropdownList
                        className='textfield w-100 mx-1 text-start'
                        filter={false}
                        placeholder='Category'
                        data={['Soft', 'Technical', 'Transferable']}
                        />
                        <ComboBox 
                        className='textfield w-100 mx-1 text-start' 
                        data-testid='skill-text-input'
                        hideEmptyPopup 
                        placeholder='Select skill' 
                        data={['Communication','App Development', 'Public Speaking', 'Java', 'Python', 'asp','C++', 'a','b','c','5','1']}
                        />
                        {/* <Form.Control className="textfield form-control border border-2 w-75 m-2" type="input" data-testid='skill-text-input'/> */}
                    </Col>

                    {/* Renders star rating item */}
                    <Col lg={3} md={12} xs={12}>
                        <Rater/>
                    </Col>       
                </Row>
            </Container>
        
    );
}
