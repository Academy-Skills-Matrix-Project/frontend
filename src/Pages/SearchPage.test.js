import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';
import SearchPage from './SearchPage';

// Test for the NavHeader component
test('NavHeader.js renders NavHeader', () => {
    render(<NavHeader />);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

// Test that <Col> elements have sm property
test('SearchPage.js is responsive', () => {
    render(<SearchPage />);

    // Get <Col> elements
    const col = screen.getAllByTestId('col');

    // Check that <Col> elements have sm property
    expect(col[0]).toHaveBeenCalledWith(props, 'sm');
}); 
    

// Test filter render


// Test for filter categories


// Test for search bar


// Test search bar input field


// Test for submit button


// Test for My Account button in Nav Header


// Test for Logout button in Nav Header


// Test for header that reads "Search and Filter Co-Workers"


// Test that Users are rendered in the Search Page


// Test for User's name


// Test for User's skill


// Test for User's language


// Test for User's job title


// Test for User's location/time zone

