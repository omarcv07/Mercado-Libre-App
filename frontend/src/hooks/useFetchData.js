import { useState, useEffect } from 'react';
import { fetchData } from '../api';
import _ from 'lodash';

const useFetchData = ({ url, required = [], ...options }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const opts = JSON.stringify(options);
    const req = JSON.stringify(required);

    useEffect(() => {
        if (JSON.parse(req).some((value) => _.isNil(value))) {
            setData({});
            setLoading(false);
            return;
        }

        (async function () {
            setLoading(true);
            try {
                const data = await fetchData(url, opts);
                setData(data);
                setError(null);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [url, opts, req]);

    return { data, loading, error };
};

export default useFetchData;
