import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPageRow from './SearchPageRow';
import { MemoryRouter } from 'react-router-dom'

describe('SearchPageRow.js', () => {test("User should see a container for the components of the search page", () => {
    render(
        <MemoryRouter>
            <SearchPageRow/>
        </MemoryRouter>);
    const logo = screen.getByTestId('search-row');
    expect(logo).toBeInTheDocument();
    const firstName = screen.getByTestId('First Name');
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByTestId('Last Name');
    expect(lastName).toBeInTheDocument();
    const topSkill = screen.getByText('Top Skill:');
    expect(topSkill).toBeInTheDocument();
    const topLang = screen.getByText('Top Language:');
    expect(topLang).toBeInTheDocument();
    const location = screen.getByText('Time Zone:');
    expect(location).toBeInTheDocument();
    const jobTitle = screen.getByText('Job Title:');
    expect(jobTitle).toBeInTheDocument();
});
});
