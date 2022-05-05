import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsPage from './SkillsPage';
import { MemoryRouter } from 'react-router-dom';
import SkillRow from '../Components//Rows/SkillRow';


const skill = {skillId: 1, title: 'Test', level:3}
let tempSkills = [{skillId: 1, title: 'Test', level:3}, {skillId: 2, title: 'Test2', level:1}]

describe('SkillRow.js', () => {test('<LanguageRow /> components render to the page', () => {
    render(<MemoryRouter>
        <SkillRow skill={skill} skillsArray={tempSkills}/>
    </MemoryRouter>);
    const skillRow = screen.getByTestId('skill-row');
    expect(skillRow).toBeInTheDocument();
})
});

