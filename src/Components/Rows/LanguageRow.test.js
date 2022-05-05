import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageRow from './LanguageRow';

describe('LanguageRow.js', () => {test("User should see a red 'delete' button", () => {
    render(<LanguageRow />);
    const logo = screen.getByTestId('delete-button');
    expect(logo).toHaveAttribute('src', '/Cancel.png');
    expect(logo).toHaveAttribute('alt', 'delete row');
});
});

describe('LanguageRow', () => {test("User should see a container for the components of the language page", () => {
    render(<LanguageRow />);
    const logo = screen.getByTestId('language-row');
    expect(logo).toBeInTheDocument();
});
});

describe('LanguageRow.js', () => {test("User should be able to click the delete button", () => {
    render(<LanguageRow />);
    const deleteButton = screen.getByTestId('delete-button');
    expect(deleteButton).toBeInTheDocument();
});
});

describe('LanguageRow.js', () => {test("User should see text saying 'I am proficent in...'", () => {
    render(<LanguageRow />);
    const logo = screen.getByText('I am proficient in...');
    expect(logo).toBeInTheDocument();
});
});

describe('LanguageRow.js', () => {test("User should see a text input field", () => {
    render(<LanguageRow />);
    const logo = screen.getByTestId('language-text-input');
    expect(logo).toBeInTheDocument();
});
});

describe('LanguageRow.js', () => {test("User should be able to click a text input field", () => {
    render(<LanguageRow />);
    const dropdown = screen.getByTestId('language-text-input');
    fireEvent.click(dropdown);
    expect(dropdown).toBeEnabled();
});
});