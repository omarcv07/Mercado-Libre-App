import { Box, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { icShipping } from '../../assets/images';
import Image from '../Image';
import PropTypes from 'prop-types';

const Item = ({
    id,
    title,
    picture,
    price: { amount },
    free_shipping: freeShipping,
    isLastItem
}) => {
    const navigate = useNavigate();

    const itemPrice = amount.toLocaleString();
    const addDivider = !isLastItem && <Divider orientation={'horizontal'} />;
    const isShippingFree = freeShipping && (
        <Image alt={'shipping'} src={icShipping} width={17} height={17} />
    );

    const onClick = () => {
        navigate(`/items/${id}`);
    };

    return (
        <Box data-testid={'item'} sx={{ p: 2 }}>
            <Card onClick={onClick} elevation={0} sx={{ cursor: 'pointer', display: 'flex' }}>
                <CardMedia component="img" sx={{ width: 151 }} src={picture} alt={title} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Box display={'flex'} alignItems={'center'}>
                            <Typography mr={1} component="div" variant="h5">
                                ${itemPrice}
                            </Typography>
                            {isShippingFree}
                        </Box>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {title}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            {addDivider}
        </Box>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired
    }).isRequired,
    free_shipping: PropTypes.bool,
    isLastItem: PropTypes.bool
};

export default Item;
