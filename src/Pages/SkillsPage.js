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
                <Container fluid >
                    <Row style={{display:'flex', justifyContent:'left'}}>
                            <h2 className=''>Personal Information</h2>
                    </Row>
                    <Row className='text-center'>
                        <h1>List and Rank your Work Related Skills</h1>
                    </Row>
                    <Container className='border-bottom border-4 border-dark pb-5'>
                        <SkillRow />
                        <SkillRow />
                    </Container>
                    <Container className='position-relative text-center bg-success'>
                        <CircleButton />
                    </Container>
                    <Container className='text-center mt-4'>
                        <AppButton title='Continue ' />
                    </Container>
                    
                </Container>
            </>
            
        );
        
    }
}
export default SkillsPage;