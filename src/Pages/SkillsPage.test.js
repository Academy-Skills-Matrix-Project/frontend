import React from 'react';
import { render, screen } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';
import SkillsPage from './SkillsPage';
import { MemoryRouter } from 'react-router-dom';
import SkillRow from '../Components//Rows/SkillRow';

test('NavHeader.js renders NavHeader', () => {
    render(<MemoryRouter>
        <NavHeader />
    </MemoryRouter>);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

// Sign-out icon appears when isLogoutEnabled is true
describe('NavHeader.js', () => {test('Sign-out icon appears when isLogoutEnabled is true', () => {
    render(
        <MemoryRouter>
            <NavHeader isLogoutEnabled={true} />
        </MemoryRouter>);
    const signOut = screen.getByAltText('LogOut');
    expect(signOut).toBeInTheDocument();
});
});

// <SkillRows /> components render to the page
describe('SkillRow.js', () => {test('<SkillRows /> components render to the page', () => {
    render(<MemoryRouter>
        <SkillRow />
    </MemoryRouter>);
    const skillRow = screen.getByTestId('skill-row');
    expect(skillRow).toBeInTheDocument();
})
});

// User should see a heading that reads List and Rank your Work Related Skills
describe('SkillsPage.js', () => {test("User should see a heading that reads 'List and Rank your Work Related Skills'", () => {
    render(<MemoryRouter>
        <SkillsPage />
    </MemoryRouter>);
    const skillsHeading = screen.getByText(/List and Rank your Work Related Skills/i);
    expect(skillsHeading).toBeInTheDocument();
});
});

// User should see a heading that reads 'Personal Information'
describe('SkillsPage.js', () => {test("User should see a heading that reads 'Personal Information'", () => {
    render(
        <MemoryRouter>
            <SkillsPage />
        </MemoryRouter>);

    const personalInfo = screen.getByText(/Personal Information/i);
    expect(personalInfo).toBeInTheDocument();
});
});
