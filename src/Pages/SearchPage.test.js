import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from './SearchPage';

// Test for the NavHeader component
test('NavHeader.js renders NavHeader', () => {
    render(
        <MemoryRouter>
            <NavHeader />
        </MemoryRouter>);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

// Test for responsiveness, <Container> element from react-bootstrap should have fluid property
test('SearchPage.js is responsive', () => {
    render(<Router><SearchPage /></Router>);

    const testContainer = screen.getByTestId('container');

    expect(testContainer.classList.contains('container-fluid')).toBe(true);
}); 

test('Components render to Search page', () =>{
    render(
        <MemoryRouter>
            <SearchPage/>
        </MemoryRouter>
    );
    const header = screen.getByText('Search and Filter Co-Workers');
    expect(header).toBeInTheDocument();
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
    const combobox = screen.getByTestId('combobox');
    expect(combobox).toBeInTheDocument();
    const searchRowContainer = screen.getByTestId('search-row-container');
    expect(searchRowContainer).toBeInTheDocument();
});
 
// Test filter render


// Test for filter categories


// Test for search bar


// Test for submit button


// Test for My Account button in Nav Header


// Test for Logout button in Nav Header
/*
test('Logout button is enabled', () => {
    render(
        <MemoryRouter>
            <NavHeader />
        </MemoryRouter>
    );

    const navinheader = await screen.findByTestId('navinheader');

    expect(navinheader.properties.isLogoutEnabled).toBe(true);
});
*/


// Test that Users are rendered in the Search Page
test('<SearchPageRow /> renders to page at least once', () => {
    render(<MemoryRouter><SearchPage /></MemoryRouter>);

    const searchPageRow = screen.getByTestId('search-row-container');

    expect(searchPageRow.children.length).toBeGreaterThan(0);
})

// Test for User's name


// Test for User's skill


// Test for User's language


// Test for User's job title


// Test for User's location/time zone

