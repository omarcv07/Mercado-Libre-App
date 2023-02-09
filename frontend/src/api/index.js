import axios from 'axios';

export const API_URL = 'http://localhost:8000/api';

export const fetchData = async (url, options) => {
    const args = JSON.parse(options);
    const body = { ...args };
    const response = await axios.get(url, body);
    const data = response.data;
    return data;
};
