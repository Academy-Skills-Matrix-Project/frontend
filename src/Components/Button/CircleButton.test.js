import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import CircleButton from './CircleButton';

// Test for Button Component Render
test('Circle, add skill, button should be visible to user', () => {
    render(<CircleButton />);
    // Get the button element
    const button = screen.getByTestId('circle-button');
    expect(button).toBeInTheDocument();
});

// Add skill button can be clicked
test('Add Skill button can be clicked', () => {
    render(<CircleButton />);
    const dropdown = screen.getByTestId('circle-button');
    fireEvent.click(dropdown);
    expect(dropdown).toBeEnabled();
});