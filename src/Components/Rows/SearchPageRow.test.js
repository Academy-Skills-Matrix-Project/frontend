import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPageRow from './SearchPageRow';
import { MemoryRouter } from 'react-router-dom'

describe('SearchPageRow.js', () => {test("User should see a container for the components of the search page", () => {
    let tempSkills = [{userId: 1, skillId: 2, skillLevel: 1}, {userId: 2, skillId: 3, skillLevel: 2}]
    let tempLangs = [{userId: 1, LanguageId: 2, skillLevel: 1}, {userId: 2, LanguageId: 3, skillLevel: 2}]
    let skills = [{skillId: 1}, {skillId:2}]
    let languages = [{languageId: 1}, {languageId: 2}]
    let user = {userId: 1}

    render(
        <MemoryRouter>
            <SearchPageRow user={user} skillArray={tempSkills} languageArray={tempLangs} skills={skills} languages={languages} users={{id: 1}}/>
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