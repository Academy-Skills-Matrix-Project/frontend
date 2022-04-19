import React, {useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import AppButton from '../Components/Button/Button';
import CircleButton from '../Components/Button/CircleButton';
import NavHeader from '../Components/NavHeader/NavHeader';
import SkillRow from '../Components/Rows/SkillRow';



export default function SkillsPage() {
    
    const[row, setRow] = useState([<SkillRow/>]);

    const loadNewRow = () => {
        const newRow = [...row, <SkillRow/>];
        setRow(newRow);
    }

    const deleteRow = (rowIndex) => {
        const newRow = row.filter((row, index) => index !== rowIndex);
        setRow(newRow);
    }

    return(
        <>
            {/* Renders navbar and passes props to render just logout button */}
            <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={false} />
            <Container fluid>
                <Row 
                style={{display:'flex', justifyContent:'left'}}
                >
                    <h2 className='p-2 fw-bold text-start mb-5'>Personal Information</h2>
                </Row>
                <Row className='text-center'>
                    <h1>List and Rank your Work Related Skills</h1>
                </Row>

                {/* Renders the row for skill entry */}
                <Container className='border-bottom border-top border-4 border-dark pb-5'>
                    {/* {row} */}
                    {row.map((rowNumber, index) => (
                        <SkillRow number={rowNumber} onRemove={() => deleteRow(index)} />
                    ))}
                </Container>

                {/* Renders bottom divider with 'add' button */}
                <Container className='position-relative text-center '>
                    <CircleButton data-testid='plus-button' onClick={loadNewRow} />
                </Container>

                {/* Renders 'Continue' button */}
                <Container className='text-center mt-5'>
                    <AppButton title='Continue' page='SkillsPage' />
                </Container>
            </Container>
        </>
    );   
}

