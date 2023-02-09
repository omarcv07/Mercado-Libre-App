import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from '../Image';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) => {
    const {
        picture,
        id,
        condition,
        sold_quantity: soldQuantity,
        price: { amount },
        title,
        itemDescription
    } = item;

    const itemPrice = amount.toLocaleString();

    return (
        <Grid p={4} container>
            <Grid item xs={12} sm={8}>
                <Box sx={{ justifyContent: 'center', display: 'center' }}>
                    <Image src={picture} alt={id} width={500} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box px={5}>
                    <Box display={'flex'} mb={1} variant={'body2'}>
                        <Typography mb={1} variant={'body2'}>
                            {condition}
                        </Typography>
                        -
                        <Typography mb={1} variant={'body2'}>
                            {soldQuantity} vendidos
                        </Typography>
                    </Box>
                    <Typography mb={2} fontWeight={'700'} variant={'h5'}>
                        {title}
                    </Typography>
                    <Typography mb={4} variant={'h4'}>
                        ${itemPrice}
                    </Typography>
                    <Box>
                        <Button size="large" fullWidth variant="contained">
                            Comprar
                        </Button>
                    </Box>
                </Box>
            </Grid>
            {itemDescription && (
                <Grid item sx={{ marginTop: '5rem' }} xs={12} sm={8}>
                    <Typography mb={3} variant={'h5'}>
                        Descripcion del producto
                    </Typography>
                    <Typography sx={{ color: 'gray' }} variant="body1">
                        {itemDescription}
                    </Typography>
                </Grid>
            )}
        </Grid>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.shape({
        picture: PropTypes.string,
        id: PropTypes.string,
        condition: PropTypes.string,
        sold_quantity: PropTypes.number,
        price: PropTypes.shape({
            amount: PropTypes.number
        }),
        title: PropTypes.string,
        itemDescription: PropTypes.string
    }).isRequired
};

export default ItemDetail;
