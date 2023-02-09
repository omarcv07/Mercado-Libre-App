import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchInput from './index';

describe('SearchInput component', () => {
    test('renders the component', () => {
        render(<SearchInput onChange={() => {}} onClick={() => {}} onSubmit={() => {}} />);
        const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');
        expect(inputElement).toBeInTheDocument();
    });
});
