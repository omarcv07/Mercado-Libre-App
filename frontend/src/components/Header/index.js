import React, { useState } from 'react';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { logoML } from '../../assets/images';
import SearchInput from '../SearchInput';
import Image from '../Image';
import _ from 'lodash';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');

    const navigate = useNavigate();
    const [searchData, setSearchData] = useState(searchValue);

    const searchNavigation = () =>
        navigate({ pathname: '/items', search: `?search=${searchData}` });

    const onSearch = (e) => {
        setSearchData(e.target.value);
    };

    const sendSearchData = (e) => {
        e.preventDefault();
        if (_.isNil(searchData) || _.isEmpty(searchData)) return;

        searchNavigation();
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={0} color="secondary" position="static">
                <Container>
                    <Toolbar>
                        <Box
                            onClick={() =>
                                _.isNil(searchData) || _.isEmpty(searchData.trim())
                                    ? navigate('/items')
                                    : searchNavigation()
                            }
                            sx={{ cursor: 'pointer', mr: 2, my: 2 }}
                        >
                            <Image width={70} src={logoML} alt="logoMl" />
                        </Box>
                        <SearchInput
                            value={searchData}
                            onChange={onSearch}
                            onSubmit={sendSearchData}
                            onClick={sendSearchData}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;
