import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageRow from './LanguageRow';

describe('LanguageRow.js', () => {test("User should see a red 'delete' button", () => {
    render(<LanguageRow />);
    const logo = screen.getByTestId('delete-button');
    expect(logo).toHaveAttribute('src', 'Cancel.png');
    expect(logo).toHaveAttribute('alt', 'delete row');
});
});
