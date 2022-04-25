import React from 'react';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function AppButton(props) {
    const history = useHistory();

    const handleClick = e => {
        switch(props.page){
            case 'LandingPage': history.push('/generalinfo'); break;
            case 'GeneralInfo': history.push('/skillspage'); break;
            case 'SkillsPage': history.push('/languagepage'); break;
            case 'LanguagePage': history.push('/profilepage/0'); break;
            case 'ProfilePageEdit': history.push('/skillspage'); break;
            default: history.push('/');
        }  
    }

    return (
        <Button 
            className="btn btn-danger" 
            type="submit" 
            data-testid="button"
            onClick={handleClick}
            >
            {props.title}
        </Button>
    );
}

export default AppButton;