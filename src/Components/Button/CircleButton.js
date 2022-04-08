import React from 'react';

export default function CircleButton(){
    return(
        <>
            <a href='/'><img 
            className=
            'position-absolute top-0 start 50 translate-middle border border-2 border-dark bg-light rounded-circle p-2' 
            src='Plus.png'
            data-testid='circle-button'
            alt='Delete button'/>
            </a>
        </>
            
        
    );

}