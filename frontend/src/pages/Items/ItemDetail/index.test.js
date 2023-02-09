import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemDetailPage from './index';
import useFetchData from '../../../hooks/useFetchData';

jest.mock('react-router-dom', () => ({
    useParams: jest.fn().mockReturnValue({ id: '12345' })
}));

jest.mock('../../../hooks/useFetchData', () => ({
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
        data: {
            item: {
                picture: 'https://example.com/picture.jpg',
                id: '123',
                condition: 'Nuevos',
                sold_quantity: 10,
                price: { amount: 10000 },
                title: 'Item title',
                itemDescription: 'Item description'
            },
            description: 'Item description'
        },
        loading: false,
        error: null
    }))
}));

describe('ItemDetailPage', () => {
    it('should render spinner if loading', () => {
        useFetchData.mockReturnValue({
            loading: true
        });

        render(<ItemDetailPage />);
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toBeInTheDocument();
    });

    test('renders error message if API call fails', async () => {
        useFetchData.mockReturnValue({
            error: 'Not Item Found'
        });

        render(<ItemDetailPage />);

        const findText = await screen.findByText('Not Item Found');
        expect(findText).toBeInTheDocument();
    });

    test('renders item detail once data is loaded', async () => {
        useFetchData.mockReturnValue({
            data: {
                item: {
                    picture: 'https://example.com/picture.jpg',
                    id: '123',
                    condition: 'Nuevos',
                    sold_quantity: 10,
                    price: { amount: 10000 },
                    title: 'Item title'
                },
                description: 'Item description'
            },
            loading: false
        });

        render(<ItemDetailPage />);

        const findText = await screen.findByText('Item title');
        expect(findText).toBeInTheDocument();
        expect(screen.getByText('Item description')).toBeInTheDocument();
    });
});
