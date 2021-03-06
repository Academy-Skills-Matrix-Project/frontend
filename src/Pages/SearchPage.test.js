import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from './SearchPage';

const token = localStorage.getItem("my_token");
// Test for responsiveness, <Container> element from react-bootstrap should have fluid property
test('SearchPage.js is responsive', () => {
    render(
        <MemoryRouter>
            <SearchPage  />
        </MemoryRouter>);

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
    // const combobox = screen.getByTestId('combobox');
    // expect(combobox).toBeInTheDocument();
    const searchRowContainer = screen.getByTestId('search-row-container');
    expect(searchRowContainer).toBeInTheDocument();
});

// Test for filter categories
// test('Filter categories render to Search page', () =>{
//     render(
//         <MemoryRouter>
//             <SearchPage />
//         </MemoryRouter>);

//     const filterBy = screen.getByText('Filter by...');
//     expect(filterBy).toBeInTheDocument();
// });

// Test for submit button
// test('Submit button renders to Search page', () =>{
//     render(
//         <MemoryRouter>
//             <SearchPage />
//         </MemoryRouter>);

//     const submitButton = screen.getByText('Submit');
//     expect(submitButton).toBeInTheDocument();
// });


// Test for visible My Account button
test('My Account button is visible', () =>{
    render(
        <MemoryRouter>
            <SearchPage />
        </MemoryRouter>);

    const myAccountButton = screen.getByAltText('MyAccount');
    expect(myAccountButton).toBeInTheDocument();
});

// Test for Logout button in Nav Header
test('Logout button is visible', () => {
    render(
        <MemoryRouter>
            <SearchPage />
        </MemoryRouter>
    );

    const logoutbtn = screen.getByAltText('LogOut');
    expect(logoutbtn).toBeInTheDocument();
});

// Test that Users are rendered in the Search Page
// test('<SearchPageRow /> renders to page at least once', () => {
//     render(
//         <MemoryRouter>
//             <SearchPage />
//         </MemoryRouter>);

//     const searchPageRow = screen.getByTestId('search-row-container');
//     expect(searchPageRow.children.length).toBeGreaterThan(0);
// });

