import React from 'react';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PropTypes from 'prop-types';

const Breadcrumb = ({ breadcrumbs }) => (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
    </Breadcrumbs>
);

Breadcrumb.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Breadcrumb;
