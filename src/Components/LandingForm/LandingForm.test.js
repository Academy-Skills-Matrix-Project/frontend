import { render, screen} from '@testing-library/react';
import LandingForm from './LandingForm';

// Test for Form Component Render
test('Sign-in form should be visible to user', () => {
    render(<LandingForm />);

    // Get the form element
    const form = screen.getByTestId('sign-in-form');

    expect(form).toBeInTheDocument();
})

// Test for Form Labels (sign-in, email, password)
test('Labels display to document', () => {
    render(<LandingForm />);

    const signInLabel = screen.getByText('Sign in');
    const emailLabel = screen.getByText('Email');
    const passwordLabel = screen.getByText('Password');

    expect(signInLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
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

//Form labels are visible
test('User should see form labels Email and Enter Password', () => {
    render(<LandingForm />);
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Enter Password');

    expect(email).toHaveDisplayValue('Email');
    expect(password).toHaveDisplayValue('Enter Password');
})