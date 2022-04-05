import React, {useState} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CategoryDropdown.css'

export default function CategoryDropdown() {

    const [value , setValue] = useState('Category');
    const handleSelect=((e) => {
        setValue(e);
    });

    return(
        <Dropdown>
            {/* <Dropdown.Toggle className='border border-2 border-dark' id='dropdown-basic' variant="light">
                Category
            </Dropdown.Toggle> */}
            <DropdownButton 
            className='db border border-2 border-dark rounded text-end'
            variant='transparent'
            title={value}
            onSelect={handleSelect}>
                <Dropdown.Item className='w-100' eventKey={'Technical'}>Technical</Dropdown.Item>
                <Dropdown.Item className='w-100' eventKey={'Soft'}>Soft</Dropdown.Item>
            </DropdownButton>
        </Dropdown>

        // <Dropdown>
        //     <Dropdown.Toggle 
        //     title={value}
        //     onSelect={handleSelect} 
        //     className='border border-2 border-dark' 
        //     id='dropdown-basic' 
        //     variant="light">
                
        //     </Dropdown.Toggle>
        //     <Dropdown.Menu
        //     className='db border border-2 border-dark rounded text-end'
        //     variant='light'
        //     >
        //         <Dropdown.Item className='' eventKey={'Technical'}>Technical</Dropdown.Item>
        //         <Dropdown.Item className='' eventKey={'Soft'}>Soft</Dropdown.Item>
        //     </Dropdown.Menu>
        // </Dropdown>
    );
    
    
}
