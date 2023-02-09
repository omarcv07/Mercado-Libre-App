import React from 'react';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import './index.scss';

const SearchInput = ({ onChange, onClick, onSubmit, value }) => (
    <Paper onSubmit={onSubmit} component="form" elevation={0} className={'search-input-paper'}>
        <InputBase
            sx={{ ml: 2, flex: 1 }}
            value={value || ''}
            onChange={onChange}
            placeholder="Nunca dejes de buscar"
            inputProps={{ 'aria-label': 'Nunca dejes de buscar' }}
        />
        <Divider flexItem orientation="vertical" />
        <IconButton
            className="search-button"
            type="button"
            sx={{ p: '10px' }}
            disableRipple
            aria-label="search"
            onClick={onClick}
        >
            <SearchIcon />
        </IconButton>
    </Paper>
);

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default SearchInput;
