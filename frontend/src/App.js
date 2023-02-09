import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter';
import theme from './styles/theme';
import { ItemContextProvider } from './contexts/ItemContext';

const App = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <ItemContextProvider>
                <AppRouter />
            </ItemContextProvider>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
