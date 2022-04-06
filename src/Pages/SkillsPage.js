import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AppButton from '../Components/Button/Button';
import CircleButton from '../Components/Button/CircleButton';
import NavHeader from '../Components/NavHeader/NavHeader';
import SkillRow from '../Components/SkillPageRow/SkillRow';




class SkillsPage extends React.Component {
    render() {
        return(
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={false} />
                <Container fluid>
                    <Row 
                    style={{display:'flex', justifyContent:'left'}}
                    >
                            <h4 className='p-2'>Personal Information</h4>
                    </Row>
                    <Row className='text-center'>
                        <h1>List and Rank your Work Related Skills</h1>
                    </Row>
                    <Container className='border-bottom border-top border-4 border-dark pb-5'>
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                    </Container>
                    <Container className='position-relative text-center bg-success'>
                        <CircleButton data-testid='plus-button' />
                    </Container>
                    <Container className='text-center mt-4'>
                        <AppButton title='Continue' />
                    </Container>
                    
                </Container>
            </>
            
        );
        
    }
}
export default SkillsPage;