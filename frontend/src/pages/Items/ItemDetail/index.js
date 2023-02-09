import React from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../api';
import Spinner from '../../../components/Spinner';
import useFetchData from '../../../hooks/useFetchData';
import ItemDetail from '../../../components/ItemDetail';

export const ItemDetailPage = () => {
    const params = useParams();

    const { data, loading, error } = useFetchData({
        url: `${API_URL}/items/${params.id}`
    });

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return 'Not Item Found';
    }

    const itemDescription = data.description;

    return <ItemDetail item={{ itemDescription, ...data.item }} />;
};

export default ItemDetailPage;
