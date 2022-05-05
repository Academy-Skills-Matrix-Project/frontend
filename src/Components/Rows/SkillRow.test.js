import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SkillRow from './SkillRow';

const skill={skillId: 999, title:"test", level: 5}
//Test to see if the container for the skill page components is rendered
describe('SkillsRow.js', () => {test("User should see a container for the components of the skill page", () => {
    render(<SkillRow skill={skill} />);
    const logo = screen.getByTestId('skill-row');
    expect(logo).toBeInTheDocument();
});
});

//Delete button test
describe('SkillsRow.js', () => {test("User should see a red 'delete' button", () => {
    render(<SkillRow skill={skill} />);
    const logo = screen.getByTestId('delete-button');
    expect(logo).toHaveAttribute('src', '/Cancel.png');
    expect(logo).toHaveAttribute('alt', 'delete row');
});
});

//test to see if delete button is clickable
describe('SkillsRow.js', () => {test("User should be able to click the delete button", () => {
    render(<SkillRow skill={skill} />);
    const deleteButton = screen.getByTestId('delete-button');
    expect(deleteButton).toBeInTheDocument();
});
});

//'I am proficent in...' text test
describe('SkillsRow.js', () => {test("User should see text saying 'I am proficent in...'", () => {
    render(<SkillRow skill={skill} />);
    const logo = screen.getByText('I am proficient in...');
    expect(logo).toBeInTheDocument();
});
});

//text input field for skill test
describe('SkillsRow.js', () => {test("User should see a text input field", () => {
    render(<SkillRow skill={skill} />);
    const logo = screen.getByTestId('skill-text-input');
    expect(logo).toBeInTheDocument();
});
});

//test to see if input field is clickable
describe('SkillsRow.js', () => {test("User should be able to click a text input field", () => {
    render(<SkillRow skill={skill} />);
    const dropdown = screen.getByTestId('skill-text-input');
    fireEvent.click(dropdown);
    expect(dropdown).toBeEnabled();
});
});







