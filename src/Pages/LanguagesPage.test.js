import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';
import {MemoryRouter} from 'react-router-dom';

test('NavHeader.js renders NavHeader', () => {
    render(
      <MemoryRouter>
        <NavHeader />
      </MemoryRouter>);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

// User can logout successfully
jest.mock("../App", () => {
  return {
    auth: () => {
      return {
        signOut: () => {
          jest.fn();
        }
      }
    }
  }
})

// Five star ratings state updates successfully


// Clicking on X will delete language row from page


// Clicking on + will add a new language row to the page


// Clicking save button will save state of page to user's profile


// Header reads "Personal Information"


// Banner reads "Languages and Proficiency"