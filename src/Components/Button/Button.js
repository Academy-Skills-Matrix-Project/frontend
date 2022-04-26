import React from 'react';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function AppButton(props) {
    const history = useHistory();

    const handleClick = e => {
        switch(props.page){
            case 'LandingPage': history.push('/searchpage'); break;        
            case 'UserInfo': history.push('/profilepage'); break;            
            case 'ProfilePageEdit': history.push('/userinfo'); break;
            default: history.push('/');
        }  
    }

    return (
        <Button 
            className="btn btn-danger btn-lg" 
            type="submit" 
            data-testid="button"
            onClick={handleClick}
            >
            {props.title}
        </Button>
    );
}

export default AppButton;