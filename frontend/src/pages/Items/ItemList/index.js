import _ from 'lodash';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../api';
import Item from '../../../components/Item';
import Spinner from '../../../components/Spinner';
import ItemContext from '../../../contexts/ItemContext';
import useFetchData from '../../../hooks/useFetchData';

export const ItemsListPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchData = searchParams.get('search');

    const itemContext = useContext(ItemContext);

    const { data, loading, error } = useFetchData({
        url: `${API_URL}/items`,
        params: {
            q: searchData
        },
        required: [searchData]
    });

    useEffect(() => {
        if (data && data.categories) {
            itemContext.setCategories(data.categories);
        }
    }, [data, itemContext.setCategories, itemContext]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return error?.response?.data?.error || 'Error';
    }

    if (_.isEmpty(data.items)) return '';

    const items = data.items.slice(0, 4);
    return items.map((item, index) => {
        const isLastItem = index === items.length - 1;
        return <Item key={index} isLastItem={isLastItem} {...item} />;
    });
};

export default ItemsListPage;
