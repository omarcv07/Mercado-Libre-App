import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Item from './index';
import * as router from 'react-router';

const navigate = jest.fn();

describe('Item component', () => {
    const id = '123';
    const title = 'Item title';
    const picture = 'http://example.com/item.jpg';
    const price = { amount: 12345 };
    const freeShipping = true;
    const isLastItem = false;

    it('renders correctly', () => {
        render(
            <MemoryRouter>
                <Item
                    id={id}
                    title={title}
                    picture={picture}
                    price={price}
                    free_shipping={freeShipping}
                    isLastItem={isLastItem}
                />
            </MemoryRouter>
        );

        expect(screen.getByText('$12,345')).toBeInTheDocument();
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('navigates to item detail page when clicked', () => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

        render(
            <MemoryRouter>
                <Item
                    id={id}
                    title={title}
                    picture={picture}
                    price={price}
                    free_shipping={freeShipping}
                    isLastItem={isLastItem}
                />
            </MemoryRouter>
        );

        const itemCard = screen.getByAltText(title);
        fireEvent.click(itemCard);

        expect(navigate).toHaveBeenCalledWith(`/items/${id}`);
    });
});
