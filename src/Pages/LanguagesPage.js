import React, { useState } from 'react';
import AppButton from '../Components/Button/Button';
import NavHeader from '../Components/NavHeader/NavHeader';
import { Container, Row } from 'react-bootstrap';
import LanguageRow from '../Components/Rows/LanguageRow';
import CircleButton from '../Components/Button/CircleButton';
import { number } from 'yup';



export default function LanguagesPage() {

        const[row, setRow] = useState([<LanguageRow/>]);

        const loadNewRow = () => {
            const newRow = [...row, <LanguageRow/>];
            setRow(newRow);
        }
        
        const deleteRow = (rowIndex) => {
            const newRow = row.filter((row, index) => index !== rowIndex);
            setRow(newRow);
        }

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
                           {row.map((rowNumber, index) => (
                             <LanguageRow key={number.toString} number= {rowNumber} onRemove={() => deleteRow(index)}/>
                           ))}
                       </Container>

                       {/* Renders bottom divider with 'add' button */}
                <Container className='position-relative text-center '>
                    <CircleButton data-testid='plus-button' onClick={loadNewRow} />
                </Container>
                       
                        <Container className='text-center mt-5'>
                            <AppButton title="Save" page='LanguagePage'/>
                        </Container>
                    
                    </Container>
                    
                
            </>
        );
    
}
