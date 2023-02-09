import React from 'react';
import { Navigate } from 'react-router-dom';
import { ItemDetailPage, ItemsLayout, ItemsListPage } from './pages/Items';

const routes = [
    {
        path: '/items',
        element: <ItemsLayout />,
        children: [
            {
                element: <ItemsListPage />,
                index: true
            },
            {
                path: ':id',
                element: <ItemDetailPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/items" />
    }
];

export default routes;
