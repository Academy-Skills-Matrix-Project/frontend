import { render, screen} from '@testing-library/react';
import LandingForm from './LandingForm';

// Test for Form Component Render
test('Sign-in form should be visible to user', () => {
    render(<LandingForm/>);

    // Get the form element
    const form = screen.getByTestId('sign-in-form');

    expect(form).toBeInTheDocument();
})

// Test for Form Labels (sign-in, email, password)
test('Labels dispaly to document', () => {
    render(<LandingForm/>);

    const signInLabel = screen.getByText('Sign in');
    const emailLabel = screen.getByText('Email');
    const passwordLabel = screen.getByText('Password');

    expect(signInLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
})

// Test for Form placeholder text
test('Placeholder text should be visible to user', () => {
    render(<LandingForm/>);

    const emailPlaceholder = screen.getByPlaceholderText('Email');
    const passwordPlaceholder = screen.getByPlaceholderText('Password');

    expect(emailPlaceholder).toBeInTheDocument();
    expect(passwordPlaceholder).toBeInTheDocument();
})