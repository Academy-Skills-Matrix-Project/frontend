import { render, screen} from '@testing-library/react';
import Button from './Button';

// Test for Button Component Render
test('Sign-in button should be visible to user', () => {
    render(<Button/>);

    // Get the button element
    const button = screen.getByTestId('sign-in-button');

    expect(button).toBeInTheDocument();
})




