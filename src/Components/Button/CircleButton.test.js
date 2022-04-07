import React from 'react';
import { render, screen} from '@testing-library/react';
import CircleButton from './CircleButton';

// Test for Button Component Render
test('Circle, add skill, button should be visible to user', () => {
    render(<CircleButton />);
    // Get the button element
    const button = screen.getByTestId('circle-button');
    expect(button).toBeInTheDocument();
})