import React from 'react';
import { Button } from 'react-bootstrap';

function AppButton(props) {
    return (
        <Button className="btn btn-danger btn-lg mt-3" type="submit" data-testid="button">
            {props.title}
        </Button>
    );
}

export default AppButton;