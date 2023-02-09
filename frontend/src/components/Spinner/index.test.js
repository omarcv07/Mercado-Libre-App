import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Spinner from './index';

describe('Spinner component', () => {
    it('renders CircularProgress component', () => {
        render(<Spinner />);
        const circularProgress = screen.getByRole('progressbar');
        expect(circularProgress).toBeInTheDocument();
    });
});
