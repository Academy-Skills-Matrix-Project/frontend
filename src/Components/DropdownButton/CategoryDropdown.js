import React, {useState} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CategoryDropdown.css'

export default function CategoryDropdown() {

    const [value , setValue] = useState('Category');
    const handleSelect=((e) => {
        setValue(e);
    });

    return(
        <Dropdown className='db border border-2 border-dark rounded bg-light' data-testid='category-dropdown'>
            <DropdownButton 
            className='text-end'
            variant='transparent'
            title={value}
            onSelect={handleSelect}>
                <Dropdown.Item className='w-100' eventKey={'Technical'}>Technical</Dropdown.Item>
                <Dropdown.Item className='w-100' eventKey={'Soft'}>Soft</Dropdown.Item>
                <Dropdown.Item className='w-100' eventKey={'Transferable'}>Transferable</Dropdown.Item>
            </DropdownButton>
        </Dropdown>
    );
}
