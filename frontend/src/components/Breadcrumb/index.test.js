import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Breadcrumb from './index';
import { Typography } from '@mui/material';

afterEach(cleanup);

describe('Breadcrumb component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Breadcrumb breadcrumbs={[]} />);
        expect(container).toBeTruthy();
    });

    it('renders the correct breadcrumbs', () => {
        const breadcrumbs = ['Calzados', 'Tenis', 'Otros'];

        const breadcrumbsComponents = breadcrumbs.map((value) => (
            <Typography key={value}>{value}</Typography>
        ));

        render(<Breadcrumb breadcrumbs={breadcrumbsComponents} />);
        breadcrumbs.forEach((breadcrumb) => {
            expect(screen.getByText(breadcrumb)).toBeTruthy();
        });
    });
});
