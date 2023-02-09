import React, { useContext } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import ItemContext from '../contexts/ItemContext';
import Breadcrumb from '../components/Breadcrumb';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
    const itemContext = useContext(ItemContext);

    const breadcrumbData = itemContext.categories.map((category) => (
        <Typography key={category}>{category}</Typography>
    ));

    return (
        <>
            <Header />
            <Container sx={{ mb: 8 }}>
                <Box my={3}>
                    <Breadcrumb breadcrumbs={breadcrumbData} />
                </Box>
                <Body>{children}</Body>
            </Container>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default DefaultLayout;
