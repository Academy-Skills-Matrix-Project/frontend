import React from 'react';
import { render, screen } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';
import {MemoryRouter} from 'react-router-dom';
import LanguagesPage from './LanguagesPage';

test('NavHeader.js renders NavHeader', () => {
    render(<MemoryRouter>
        <NavHeader />
        </MemoryRouter>);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

describe('LanguagesPage.js', () => {test("User should see a heading that reads 'Laugauges and Proficiency'", () => {
    render(<MemoryRouter>
        <LanguagesPage />
    </MemoryRouter>);
    const languageHeading = screen.getByText(/Laugauges and Proficiency/i);
    expect(languageHeading).toBeInTheDocument();
});
});

describe('LanguagesPage', () => {test("User should see a heading that reads 'Personal Information'", () => {
    render(<MemoryRouter>
        <LanguagesPage />
    </MemoryRouter>);
    const personalInfo = screen.getByText(/Personal Information/i);
    expect(personalInfo).toBeInTheDocument();
});
});


// Sign-out icon appears when isLogoutEnabled is true
describe('NavHeader.js', () => {test('Sign-out icon appears when isLogoutEnabled is true', () => {
    render(<MemoryRouter>
    <NavHeader isLogoutEnabled={true} />
    </MemoryRouter>);
    const signOut = screen.getByAltText('Logout');
    expect(signOut).toBeInTheDocument();
});
});

// <SkillRows /> components render to the page
describe('LanguageRow.js', () => {test('<LanguageRow /> components render to the page', () => {
    render(<MemoryRouter>
        <LanguageRow />
    </MemoryRouter>);
    const skillRow = screen.getByTestId('language-row');
    expect(skillRow).toBeInTheDocument();
})
});

test('save button should render to the screen', () => {
    render(<MemoryRouter>
        <LanguagesPage/>
        </MemoryRouter>);
        const saveButton = screen.getAllByTestId('button');
        expect(saveButton).toBeInTheDocument();

})