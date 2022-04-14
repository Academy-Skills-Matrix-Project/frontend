import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPageRow from './SearchPageRow';


describe('SearchPageRow.js', () => {test("User should see a container for the components of the search page", () => {
    render(<SearchPageRow/>);
    const logo = screen.getByTestId('search-row');
    expect(logo).toBeInTheDocument();
});
});