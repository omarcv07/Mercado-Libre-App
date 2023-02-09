import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemsListPage from './index';
import ItemContext from '../../../contexts/ItemContext';
import useFetchData from '../../../hooks/useFetchData';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../../hooks/useFetchData', () => ({
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
        data: {
            items: [
                {
                    id: 'MLA1234',
                    picture: 'picture.com',
                    title: 'Item 1',
                    price: {
                        amount: 123
                    }
                },
                {
                    id: 'MLA5678',
                    picture: 'picture.com',
                    title: 'Item 2',
                    price: {
                        amount: 456
                    }
                }
            ],
            categories: ['category1', 'category2']
        },
        loading: false,
        error: null
    }))
}));

const setup = () => {
    const itemContext = {
        categories: [],
        setCategories: jest.fn()
    };

    return {
        itemContext,
        ...render(
            <Router>
                <ItemContext.Provider value={itemContext}>
                    <ItemsListPage />
                </ItemContext.Provider>
            </Router>
        )
    };
};

describe('<ItemsListPage />', () => {
    afterEach(cleanup);

    it('should render correctly', async () => {
        setup();
        await screen.findByText('Item 1');
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('$123')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('$456')).toBeInTheDocument();
    });

    it('should set categories in context', async () => {
        const { itemContext } = setup();
        await waitFor(() => itemContext.setCategories);
        expect(itemContext.setCategories).toHaveBeenCalledWith(['category1', 'category2']);
    });

    it('should call useFetchData hook with correct params', async () => {
        setup();

        expect(useFetchData).toHaveBeenCalledWith({
            params: { q: null },
            required: [null],
            url: 'http://localhost:8000/api/items'
        });
    });

    it('should render spinner if loading', () => {
        useFetchData.mockReturnValue({
            loading: true
        });

        render(
            <Router>
                <ItemContext.Provider value={{ categories: [], setCategories: jest.fn() }}>
                    <ItemsListPage />
                </ItemContext.Provider>
            </Router>
        );
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toBeInTheDocument();
    });

    it('should display error if fetch fails', () => {
        const mockError = {
            response: {
                data: {
                    error: 'Test error message'
                }
            }
        };
        useFetchData.mockReturnValue({
            loading: false,
            error: mockError
        });

        render(
            <Router>
                <ItemContext.Provider value={{ categories: [], setCategories: jest.fn() }}>
                    <ItemsListPage />
                </ItemContext.Provider>
            </Router>
        );
        const errorMessage = screen.getByText(mockError.response.data.error);
        expect(errorMessage).toBeInTheDocument();
    });

    it('should display empty message if no data is returned', () => {
        useFetchData.mockReturnValue({
            data: { items: [] },
            loading: false
        });

        render(
            <Router>
                <ItemContext.Provider value={{ categories: [], setCategories: jest.fn() }}>
                    <ItemsListPage />
                </ItemContext.Provider>
            </Router>
        );
        const spinner = screen.queryByTestId('spinner');
        expect(spinner).not.toBeInTheDocument();
    });

    it('should display items if data is returned', () => {
        const items = [
            {
                id: '123',
                title: 'Test item 1',
                picture: 'test-picture-1.jpg',
                condition: 'new',
                sold_quantity: 10,
                price: {
                    amount: 100
                }
            },
            {
                id: '456',
                title: 'Test item 2',
                picture: 'test-picture-2.jpg',
                condition: 'used',
                sold_quantity: 5,
                price: {
                    amount: 200
                }
            }
        ];

        useFetchData.mockReturnValue({
            data: { items },
            loading: false
        });

        render(
            <Router>
                <ItemContext.Provider value={{ categories: [], setCategories: jest.fn() }}>
                    <ItemsListPage />
                </ItemContext.Provider>
            </Router>
        );
        const itemComponents = screen.getAllByTestId('item');
        expect(itemComponents).toHaveLength(2);
    });
});
