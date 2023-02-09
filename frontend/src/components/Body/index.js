import React from 'react';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';

const Body = ({ children }) => (
    <Paper sx={{ minHeight: '87vh', height: '100%' }} elevation={0}>
        {children}
    </Paper>
);

Body.propTypes = {
    children: PropTypes.node.isRequired
};

export default Body;
