import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    return (
        <ItemContext.Provider
            value={{
                categories,
                setCategories
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};

ItemContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ItemContext;
