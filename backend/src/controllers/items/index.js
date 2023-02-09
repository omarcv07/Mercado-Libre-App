const axios = require('axios');
const _ = require('lodash');
const { ReS, ReE } = require('../../services/utils');
const { getCategoryNames, itemCondition } = require('./utils');

const mercadoLibreApiUrl = 'https://api.mercadolibre.com';
const author = { name: 'Omar', lastname: 'Cardenas' };

const getAll = async (req, res) => {
    try {
        const searchQuery = req.query.q;

        if (_.isNil(searchQuery)) return ReE(res, 'No query was supplied');

        const searchUrl = `${mercadoLibreApiUrl}/sites/MLA/search?q=${searchQuery}`;

        const { data } = await axios.get(searchUrl);

        if (_.isEmpty(data.results)) {
            return ReE(res, 'No items found', 404);
        }

        const categories = await getCategoryNames(data);

        const currencyIds = _.uniq(data.results.map(({ currency_id: currencyId }) => currencyId));

        const currencies = await Promise.all(
            currencyIds.map(async (currency) => {
                const { data } = await axios.get(`${mercadoLibreApiUrl}/currencies/${currency}`);
                return {
                    currency,
                    decimals: data.decimal_places
                };
            })
        );

        const items = data.results.map((item) => {
            const { currency, decimals } = currencies.find(
                ({ currency }) => currency === item.currency_id
            );

            return {
                id: item.id,
                title: item.title,
                price: { currency, amount: item.price, decimals },
                picture: item.thumbnail,
                condition: itemCondition(item.condition),
                free_shipping: item.shipping.free_shipping
            };
        });

        return ReS(res, { author, categories, items });
    } catch (error) {
        console.log('error', error);
        return ReE(res, error);
    }
};

const get = async (req, res) => {
    try {
        const itemId = req.params.id;
        const itemUrl = `${mercadoLibreApiUrl}/items/${itemId}`;

        const { data: itemData } = await axios.get(itemUrl);

        const { data: currencyData } = await axios.get(
            `${mercadoLibreApiUrl}/currencies/${itemData.currency_id}`
        );

        const { data: itemDescription } = await axios.get(`${itemUrl}/description`);

        const {
            id,
            title,
            currency_id: currency,
            price,
            thumbnail: picture,
            condition,
            shipping: { free_shipping: freeShipping },
            sold_quantity: soldQuantity
        } = itemData;

        const { decimal_places: decimalPlaces } = currencyData;

        const priceData = {
            currency,
            amount: price,
            decimals: decimalPlaces
        };

        const item = {
            id,
            title,
            price: priceData,
            picture,
            condition: itemCondition(condition),
            free_shipping: freeShipping,
            sold_quantity: soldQuantity
        };

        const description = itemDescription.plain_text;

        return ReS(res, { author, item, description });
    } catch (error) {
        return ReE(res, error);
    }
};

module.exports = {
    getAll,
    get
};
