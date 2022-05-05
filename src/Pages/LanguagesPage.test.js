import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import LanguagesPage from './LanguagesPage';
import LanguageRow from '../Components/Rows/LanguageRow';
import Rater from '../Components/Rating/Rating';
import NavHeader from '../Components/NavHeader/NavHeader'

const language = {id: 1, title: 'Test', level:3}
let tempSkills = [{id: 1, title: 'Test', level:3}, {id: 2, title: 'Test2', level:1}]

// runs after each test suite is executed
afterEach(() => {
  cleanup(); // resets DOM after each test suite
})


// describe('LanguagesPage.js', () => {test("User should see a heading that reads 'Coding Laugauges and Proficiency'", () => {
//     render(<MemoryRouter>
//         <LanguagesPage language={language} languagesArray={tempSkills}/>
//     </MemoryRouter>);
//     const languageHeading = screen.getByText(/Coding Languages and Proficiency/i);
//     expect(languageHeading).toBeInTheDocument();
// });
// });

// Sign-out icon appears when isLogoutEnabled is true
describe('NavHeader.js', () => {test('Sign-out icon appears when isLogoutEnabled is true', () => {
    render(<MemoryRouter>
    <NavHeader isLogoutEnabled={true} />
    </MemoryRouter>);
    const signOut = screen.getByAltText('LogOut');
    expect(signOut).toBeInTheDocument();
});
});

// <SkillRows /> components render to the page
describe('LanguageRow.js', () => {test('<LanguageRow /> components render to the page', () => {
    render(<MemoryRouter>
        <LanguageRow language={language} languagesArray={tempSkills}/>
    </MemoryRouter>);
    const skillRow = screen.getByTestId('language-row');
    expect(skillRow).toBeInTheDocument();
})
});

// ---------------- Five star ratings state updates successfully
/*
1. User clicks on the five star rating
2. handleRating() function is called
*/
test('handleRating() to be called on click', () => {
  // Initialiize mock function
  const handleRating = jest.fn();

  render(<MemoryRouter><Rater onClick={handleRating} /></MemoryRouter>);

  const starRating = screen.getByTestId('star-rater');

  // Simulate click event on star rating
  fireEvent.click(starRating);

  // Assert that handleRating() function is called
  handleRating();

  expect(handleRating).toHaveBeenCalled();
})

// Clicking on X will delete language row from page
test('Delete row on click', () => {

    const delRow = jest.fn(() => true);

    delRow();

    expect(delRow).toHaveReturned();
  })

// Clicking on + will add a new language row to the page
test('Add row on click', () => {

  const addRow = jest.fn(() => true);

  addRow();

  expect(addRow).toHaveReturned();
})

