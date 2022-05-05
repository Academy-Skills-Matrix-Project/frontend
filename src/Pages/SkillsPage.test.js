import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SkillRow from '../Components//Rows/SkillRow';

const skill = {id: 1, title: 'Test', level:3}
let tempSkills = [{id: 1, title: 'Test', level:3}, {id: 2, title: 'Test2', level:1}]

describe('SkillRow.js', () => {test('<LanguageRow /> components render to the page', () => {
    render(<MemoryRouter>
        <SkillRow skill={skill} skillsArray={tempSkills}/>
    </MemoryRouter>);
    const skillRow = screen.getByTestId('skill-row');
    expect(skillRow).toBeInTheDocument();
})
});
// <SkillRows /> components render to the page
// describe('SkillRow.js', () => {test('<SkillRows /> components render to the page', () => {
//     render(<MemoryRouter>
//         <SkillRow skillsArray={tempSkills} />
//     </MemoryRouter>);
//     const skillRow = screen.getByTestId('skill-row');
//     expect(skillRow).toBeInTheDocument();
// })
// });

// User should see a heading that reads List and Rank your Work Related Skills
// describe('SkillsPage.js', () => {test("User should see a heading that reads 'Soft Skills and Proficiency'", () => {
//     render(<MemoryRouter>
//         <SkillsPage skillsArray={tempSkills} selectedId={selectedId}/>
//     </MemoryRouter>);
//     const skillsHeading = screen.getByText(/Soft Skills and Proficiency/i);
//     expect(skillsHeading).toBeInTheDocument();
// });
// });

