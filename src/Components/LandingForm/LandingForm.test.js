import { render, screen} from '@testing-library/react';
import LandingForm from './LandingForm';
import NavHeader from '../NavHeader/NavHeader';

// Test for Form Component Render
test('Sign-in form should be rendered', () => {
    render(<LandingForm />);

    // Get the form element
    const form = screen.getByTestId('sign-in-form');

    expect(form).toBeInTheDocument();
})


// Test for Form placeholder text
test('Form text inputs should have placeholder text Email and Enter Password', () => {
    render(<LandingForm />);

    const emailPlaceholder = screen.getByPlaceholderText('Email');
    const passwordPlaceholder = screen.getByPlaceholderText('Enter Password');

    expect(emailPlaceholder).toBeInTheDocument();
    expect(passwordPlaceholder).toBeInTheDocument();
})

//Form heading test
test('For should have heading text Sign in', () => {
    render(<LandingForm />);
    const signInLabel = screen.getByText('Sign in');
    expect(signInLabel).toHaveTextContent('Sign in');

})

//Form labels text
test('User should see form labels Email and Enter Password', () => {
    render(<LandingForm />);
    const email = screen.getByTestId('email-label');
    const password = screen.getByTestId('password-label');

    expect(email).toHaveTextContent('Email');
    expect(password).toHaveTextContent('Password');
})

describe('NavHeader.js', () => {test('Logo must have src = "/SWO_logo.png" and alt = "SWO_Logo"', () => {
    render(<NavHeader/>);
    const logo = screen.getByAltText('SWO_Logo');
    expect(logo).toHaveAttribute('src', 'SWO_logo.png');
    expect(logo).toHaveAttribute('alt', 'SWO_Logo');
});
});