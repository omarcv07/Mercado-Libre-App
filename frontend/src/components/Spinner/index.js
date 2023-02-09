import React from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Spinner = () => (
    <Box
        sx={{
            minHeight: '87vh',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <CircularProgress data-testid={'spinner'} />
    </Box>
);

export default Spinner;
