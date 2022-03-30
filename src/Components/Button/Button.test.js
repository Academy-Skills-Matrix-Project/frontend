import { render, screen} from '@testing-library/react';
import Button from './FormButton';

// Test for Button Component Render
test('Sign-in button should be visible to user', () => {
    render(<Button/>);

    // Get the button element
    const button = screen.getByTestId('sign-in-button');

    expect(button).toBeInTheDocument();
})

// Button should read "Sign-in"
test(`Button should read 'Sign-in'`, () => {
    render(<Button/>);

    const buttonText = screen.getByText('Sign-in');

    expect(buttonText).toBeInTheDocument();
})