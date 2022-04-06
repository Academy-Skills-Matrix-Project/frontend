import React, {useState} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CategoryDropdown.css'

export default function CategoryDropdown() {

    const [value , setValue] = useState('Category');
    const handleSelect=((e) => {
        setValue(e);
    });

    return(
        <Dropdown  className='db border border-2 border-dark rounded bg-white w-80 m-auto' data-testid='category-dropdown'>
            <DropdownButton 
            className='text-end'
            variant='transparent'
            title={value}
            onSelect={handleSelect}>
                <Dropdown.Item className='' eventKey={'Technical'}>Technical</Dropdown.Item>
                <Dropdown.Item className='' eventKey={'Soft'}>Soft</Dropdown.Item>
                <Dropdown.Item className='' eventKey={'Transferable'}>Transferable</Dropdown.Item>
            </DropdownButton>
        </Dropdown>
    );
}
