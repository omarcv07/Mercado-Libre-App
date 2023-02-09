import React from 'react';
import { Outlet } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';

export const ItemsLayout = () => {
    return (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>
    );
};

export default ItemsLayout;
