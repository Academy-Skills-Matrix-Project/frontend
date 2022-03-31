import React from 'react';
import { Button } from 'react-bootstrap';

function FormButton() {
    return (
        <Button className="btn btn-danger btn-lg mt-3" type="submit" data-testid="sign-in-button">
            Sign-in
        </Button>
    );
}

export default FormButton;