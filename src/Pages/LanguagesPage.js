import React from 'react';
import AppButton from '../Components/Button/Button';
import NavHeader from '../Components/NavHeader/NavHeader';
import { Container } from 'react-bootstrap';
import LanguageRow from '../Components/Rows/LanguageRow';


export default function LanguagesPage() {


        return (
            <>
                <NavHeader isLogoutEnabled={true} isSearchEnabled={false} isMyAccountEnabled={false} />
                <div>
                    <h1>
                    <Container>
                        <LanguageRow/>
                        <AppButton title="Continue" page='LanguagePage'/>
                    </Container>
                    </h1>
                </div>
            </>
        );
    
}
