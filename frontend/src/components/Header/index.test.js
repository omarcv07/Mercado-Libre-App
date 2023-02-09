import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Header from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import * as router from 'react-router';

const navigate = jest.fn();

describe('Header component', () => {
    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(
            <Router>
                <Header />
            </Router>
        );
    });

    it('has a logo that can be clicked', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        const logo = screen.getByAltText('logoMl');
        fireEvent.click(logo);

        expect(navigate).toHaveBeenCalledWith('/items');
    });

    it('can perform a search', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        const searchInput = screen.getByPlaceholderText('Nunca dejes de buscar');
        fireEvent.change(searchInput, { target: { value: 'test' } });

        const searchButton = screen.getByRole('button', {
            name: 'search'
        });
        fireEvent.click(searchButton);

        expect(navigate).toHaveBeenCalledWith({
            pathname: '/items',
            search: '?search=test'
        });
    });

    it('prevents the search if the search value is empty', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        const searchButton = screen.getByRole('button', {
            name: 'search'
        });
        fireEvent.click(searchButton);

        expect(navigate).not.toHaveBeenCalled();
    });
});
