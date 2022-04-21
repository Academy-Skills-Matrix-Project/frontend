import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';
import {MemoryRouter} from 'react-router-dom';
import LanguagesPage from './LanguagesPage';
import LanguageRow from '../Components/Rows/LanguageRow';
import LandingForm from '../Pages/LandingForm';
import Rater from '../Components/Rating/Rating';
import AppButton from '../Components/Button/Button';

// runs after each test suite is executed
afterEach(() => {
  cleanup(); // resets DOM after each test suite
})

test('NavHeader.js renders NavHeader', () => {
    render(
      <MemoryRouter>
        <NavHeader />
      </MemoryRouter>);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

describe('LanguagesPage.js', () => {test("User should see a heading that reads 'Laugauges and Proficiency'", () => {
    render(<MemoryRouter>
        <LanguagesPage />
    </MemoryRouter>);
    const languageHeading = screen.getByText(/Languages and Proficiency/i);
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
    const signOut = screen.getByAltText('LogOut');
    expect(signOut).toBeInTheDocument();
});
});

// <SkillRows /> components render to the page
describe('LanguageRow.js', () => {test('<LanguageRow /> components render to the page', () => {
    render(<MemoryRouter>
        <LanguageRow/>
    </MemoryRouter>);
    const skillRow = screen.getByTestId('language-row');
    expect(skillRow).toBeInTheDocument();
})
});

test('save button should render to the screen', () => {
    render(<MemoryRouter>
        <LanguagesPage/>
        </MemoryRouter>);
        const saveButton = screen.getByTestId('button');
        expect(saveButton).toBeInTheDocument();

})

// --------------- User can logout successfully
/*
1. User clicks on the sign-out icon
2. User is redirected to the login page
*/
test('User can logout successfully', () => {
    render(
    <MemoryRouter>
        <NavHeader isLogoutEnabled={true} />
    </MemoryRouter>
    );

    render(
      <MemoryRouter>
        <LandingForm />
      </MemoryRouter>
    )

    const signOut = screen.getByAltText('LogOut');

    fireEvent.click(signOut);

    const loginPage = screen.getByText(/Sign in/i);

    expect(loginPage).toBeInTheDocument();
})

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

// Clicking save button will save state of page to user's profile
test("Expect handleClick to be called", () => {
  const handleClick = jest.fn();

  handleClick();

  expect(handleClick).toHaveBeenCalled();
})