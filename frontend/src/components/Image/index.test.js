import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Image from './index';

describe('Image component', () => {
    it('should render image with correct src, width, height, and alt attributes', () => {
        const src = 'test.png';
        const width = 100;
        const height = 200;
        const alt = 'Test Image';

        render(<Image src={src} width={width} height={height} alt={alt} />);

        const image = screen.getByAltText(alt);
        expect(image).toBeInTheDocument();
        expect(image.src).toContain(src);
        expect(image.width).toBe(width);
        expect(image.height).toBe(height);
    });
});
