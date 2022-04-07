import React from 'react';
import { render, screen } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';
import SkillsPage from './SkillsPage';
import SkillRow from '../Components/SkillPageRow/SkillRow';

test('NavHeader.js renders NavHeader', () => {
    render(<NavHeader />);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

// describe('NavHeader.js', () => {test('Logo must have src = "/SWO_logo.png" and alt = "SWO_Logo"', () => {
//     render(<NavHeader/>);
//     const logo = screen.getByAltText('SWO_Logo');
//     expect(logo).toHaveAttribute('src', 'SWO_logo.png');
//     expect(logo).toHaveAttribute('alt', 'SWO_Logo');
// });
// });

// describe('NavHeader.js', () => {test('Logo must have src = "/LogOut.png" and alt = "LogOut"', () => {
//     render(<NavHeader/>);
//     const logo = screen.getByAltText('LogOut');
//     expect(logo).toHaveAttribute('src', 'LogOut.png');
//     expect(logo).toHaveAttribute('alt', 'LogOut');
// });
// });

// Sign-out icon appears when isLogoutEnabled is true
describe('NavHeader.js', () => {test('Sign-out icon appears when isLogoutEnabled is true', () => {
    render(<NavHeader isLogoutEnabled={true} />);
    const signOut = screen.getByAltText('LogOut');
    expect(signOut).toBeInTheDocument();
});
});

// <SkillRows /> components render to the page
describe('SkillRow.js', () => {test('<SkillRows /> components render to the page', () => {
    render(<SkillRow />);
    const skillRow = screen.getByTestId('skill-row');
    expect(skillRow).toBeInTheDocument();
});
});

// User should see a heading that reads List and Rank your Work Related Skills
describe('SkillsPage.js', () => {test("User should see a heading that reads 'List and Rank your Work Related Skills'", () => {
    render(<SkillsPage />);
    const skillsHeading = screen.getByText(/List and Rank your Work Related Skills/i);
    expect(skillsHeading).toBeInTheDocument();
});
});

// User should see a heading that reads 'Personal Information'
describe('SkillsPage.js', () => {test("User should see a heading that reads 'Personal Information'", () => {
    render(<SkillsPage />);
    const personalInfo = screen.getByText(/Personal Information/i);
    expect(personalInfo).toBeInTheDocument();
});
});