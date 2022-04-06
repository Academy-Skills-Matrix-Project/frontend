import { render, screen, fireEvent } from '@testing-library/react';
import CategoryDropdown from './CategoryDropdown';

// Dropdown renders properly
test('Dropdown renders properly', () => {
    render(<CategoryDropdown />);
    const dropdown = screen.getByTestId('category-dropdown');
    expect(dropdown).toBeInTheDocument();
});