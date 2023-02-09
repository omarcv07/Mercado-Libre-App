import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Body from './index';

describe('<Body />', () => {
    it('renders children properly', () => {
        const text = 'Hello, World!';
        render(<Body>{text}</Body>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
