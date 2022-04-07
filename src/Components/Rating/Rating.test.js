import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Rater from './Rating';

describe('Rating.js', () => {test("User should see a 5 star rating component", () => {
    render(<Rater />);
    const logo = screen.getByTestId('star-rater');
    expect(logo).toBeInTheDocument();
});
});

//test to see if star rater is clickable
describe('Rating.js', () => {test("User should be able to click the star rater", () => {
    render(<Rater />);
    const dropdown = screen.getByTestId('star-rater');
    fireEvent.click(dropdown);
    expect(dropdown).toBeInTheDocument();
});
});