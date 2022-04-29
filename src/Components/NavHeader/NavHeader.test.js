import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavHeader from './NavHeader';
import { MemoryRouter } from 'react-router-dom';

//tests to see if the navbar is rendered to the page by using its test id
test('NavHeader.js renders NavHeader', () => {
    render(
        <MemoryRouter>
            <NavHeader />
        </MemoryRouter>);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

//tests to see if the SWO logo is rendered
describe('NavHeader.js renders SWO Logo', () => {test("SWO Logo appears on left side of navbar", () => {
    render(
        <MemoryRouter>
            <NavHeader />
        </MemoryRouter>);
    const logo = screen.getByTestId('navbar-swo-logo');
    expect(logo).toHaveAttribute('src', '/SWO_logo.png');
    expect(logo).toHaveAttribute('alt', 'SWO Logo');
});
});

//test to see if the SWO logo is clickable
describe('NavHeader.js', () => {test("User should be able to click the SWO logo in navbar", () => {
    render(
        <MemoryRouter>
            <NavHeader />
        </MemoryRouter>);
    const dropdown = screen.getByTestId('navbar-swo-logo');
    fireEvent.click(dropdown);
    expect(dropdown).toBeInTheDocument();
});
});