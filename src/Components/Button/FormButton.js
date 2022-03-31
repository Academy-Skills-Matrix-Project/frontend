import React from 'react';
import { Button } from 'react-bootstrap';

function FormButton(props) {
    return (
        <Button className="btn btn-danger btn-lg mt-3" type="submit" data-testid="sign-in-button">
            {props.title}
        </Button>
    );
}

export default FormButton;