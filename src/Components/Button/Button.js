import React from 'react';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function AppButton(props) {
    
    const history = useHistory();

    const handleClick = e => {
        switch(props.page){
            case 'LandingPage': history.push('/generalinfo'); break;
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