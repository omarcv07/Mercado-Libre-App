import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, width, height, alt }) => (
    <img height={height} width={width} src={src} alt={alt} />
);

Image.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string
};

export default Image;
