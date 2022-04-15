import React from 'react';
import { render, screen} from '@testing-library/react';
import LandingForm from './LandingForm';
import NavHeader from '../Components/NavHeader/NavHeader';
import {MemoryRouter} from 'react-router-dom';

// Test for Form Component Render
test('Sign-in form should be rendered', () => {
    render(<MemoryRouter>
            <LandingForm />
        </MemoryRouter>);

    // Get the form element
    const form = screen.getByTestId('sign-in-form');

    expect(form).toBeInTheDocument();
})


// Test for Form placeholder text
test('Form text inputs should have placeholder text Email and Enter Password', () => {
    render(<MemoryRouter>
            <LandingForm />
        </MemoryRouter>);

    const emailPlaceholder = screen.getByPlaceholderText('Email');
    const passwordPlaceholder = screen.getByPlaceholderText('Enter Password');

    expect(emailPlaceholder).toBeInTheDocument();
    expect(passwordPlaceholder).toBeInTheDocument();
})

//Form heading test
test('For should have heading text Sign in', () => {
    render(<MemoryRouter>
            <LandingForm />
        </MemoryRouter>);
    const signInLabel = screen.getByText('Sign in');
    expect(signInLabel).toHaveTextContent('Sign in');

})

//Form labels text
test('User should see form labels Email and Enter Password', () => {
    render(<MemoryRouter>
            <LandingForm />
        </MemoryRouter>);
    const email = screen.getByTestId('email-label');
    const password = screen.getByTestId('password-label');

    expect(email).toHaveTextContent('Email');
    expect(password).toHaveTextContent('Password');
})

//SWO Logo in navbar test
describe('NavHeader.js', () => {test('Logo must have src = "/SWO_logo.png" and alt = "SWO Logo"', () => {
    render(<MemoryRouter>
        <NavHeader />
    </MemoryRouter>);
    const logo = screen.getByTestId('navbar-swo-logo');
    expect(logo).toHaveAttribute('src', 'SWO_logo.png');
    expect(logo).toHaveAttribute('alt', 'SWO Logo');
});
});

// Forgot Password link test
describe('LandingForm.js', () => {test('User should see forgot password link', () => {
    render(<MemoryRouter>
            <LandingForm />
        </MemoryRouter>);
    const forgotPasswordLink = screen.getByText(/Forgot Password?/i);
    expect(forgotPasswordLink).toBeInTheDocument();
})})
