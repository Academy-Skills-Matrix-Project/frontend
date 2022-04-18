import React, {useState} from 'react';
import SkillRow from '../Rows/SkillRow';

export default function CircleButton(props){

    return(
        <>
            <button><img 
            className=
            'position-absolute top-0 start 50 translate-middle border border-2 border-dark bg-light rounded-circle p-2' 
            src='Plus.png'
            data-testid='circle-button'
            alt='Delete button'
            onClick={props.onClick} />
            </button>
        </>
            
        
    );

}