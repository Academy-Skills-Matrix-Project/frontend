import React from 'react';
import AppButton from '../Components/Button/Button';
import NavHeader from '../Components/NavHeader/NavHeader';
import { Container } from 'react-bootstrap';


class LanguagesPage extends React.Component {


    
    render() {
        return (
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={false} />
                <div>
                    <h1>
                    <Container>
                        <h1>LanguagePage</h1>
                        <AppButton title="Continue" page='LanguagePage'/>
                    </Container>
                    </h1>
                </div>
            </>
        );
    }
}
export default LanguagesPage;