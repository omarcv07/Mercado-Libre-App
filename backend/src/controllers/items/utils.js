const getCategoryNames = (data) => {
    const categories = data.available_filters.find(({ id }) => id === 'category');
    return (categories && categories.values.map(({ name }) => name)) || [];
};

const itemCondition = (condition) => {
    if (condition === 'new') {
        return 'Nuevos';
    } else if (condition === 'used') {
        return 'Usados';
    }
};

module.exports = {
    getCategoryNames,
    itemCondition
};
