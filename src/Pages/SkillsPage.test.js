import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsPage from './SkillsPage';
import { MemoryRouter } from 'react-router-dom';
import SkillRow from '../Components//Rows/SkillRow';


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
describe('SkillsPage.js', () => {test("User should see a heading that reads 'Soft Skills and Proficiency'", () => {
    render(<MemoryRouter>
        <SkillsPage />
    </MemoryRouter>);
    const skillsHeading = screen.getByText(/Soft Skills and Proficiency/i);
    expect(skillsHeading).toBeInTheDocument();
});
});


