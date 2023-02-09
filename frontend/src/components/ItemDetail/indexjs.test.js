import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ItemDetail from './index';

describe('ItemDetail component', () => {
    it('renders the picture, title, condition, sold_quantity, itemPrice, and description', () => {
        const item = {
            picture: 'https://example.com/picture.jpg',
            id: '123',
            condition: 'Nuevos',
            sold_quantity: 10,
            price: { amount: 10000 },
            title: 'Example Title',
            itemDescription: 'Example item description'
        };

        render(<ItemDetail item={item} />);

        expect(screen.getByAltText(item.id)).toBeInTheDocument();
        expect(screen.getByText(item.condition)).toBeInTheDocument();
        expect(screen.getByText(`${item.sold_quantity} vendidos`)).toBeInTheDocument();
        expect(screen.getByText(`$${item.price.amount.toLocaleString()}`)).toBeInTheDocument();
        expect(screen.getByText(item.title)).toBeInTheDocument();
        expect(screen.getByText(item.itemDescription)).toBeInTheDocument();
        expect(screen.getByText('Comprar')).toBeInTheDocument();
    });

    it('renders item when description is not provided', () => {
        const item = {
            picture: 'https://example.com/picture.jpg',
            id: '123',
            condition: 'Nuevos',
            sold_quantity: 10,
            price: { amount: 10000 },
            title: 'Example Title'
        };

        render(<ItemDetail item={item} />);

        expect(screen.getByAltText(item.id)).toBeInTheDocument();
        expect(screen.getByText(item.condition)).toBeInTheDocument();
        expect(screen.getByText(`${item.sold_quantity} vendidos`)).toBeInTheDocument();
        expect(screen.getByText(`$${item.price.amount.toLocaleString()}`)).toBeInTheDocument();
        expect(screen.getByText(item.title)).toBeInTheDocument();
        expect(screen.queryByText('Example item description')).not.toBeInTheDocument();
        expect(screen.getByText('Comprar')).toBeInTheDocument();
    });
});
