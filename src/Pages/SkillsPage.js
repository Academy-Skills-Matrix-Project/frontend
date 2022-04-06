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
                {/* Renders navbar and passes props to render just logout button */}
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={false} />
                <Container fluid>
                    <Row 
                    style={{display:'flex', justifyContent:'left'}}
                    >
                        <h4 className='p-2 fw-bold'>Personal Information</h4>
                    </Row>
                    <Row className='text-center'>
                        <h1>List and Rank your Work Related Skills</h1>
                    </Row>

                    {/* Renders the row for skill entry */}
                    <Container className='border-bottom border-top border-4 border-dark pb-5'>
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                        <SkillRow data-testid='skill-row' />
                    </Container>

                    {/* Renders bottom divider with 'add' button */}
                    <Container className='position-relative text-center bg-success'>
                        <CircleButton data-testid='plus-button' />
                    </Container>

                    {/* Renders 'Continue' button */}
                    <Container className='text-center mt-4'>
                        <AppButton title='Continue' />
                    </Container>
                    
                </Container>
            </>
            
        );
        
    }
}
export default SkillsPage;