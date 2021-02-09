import { css } from 'styled-components';

const size = {
    xXLarge: 1920,
    xLarge: 1440,
    large: 1280,
    medium: 1024,
    small: 768,
    xSmall: 640
}

export const below = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${size[label]}px) {
            ${css(...args)}
        }
    `;
    return acc;
}, {})
console.log('below', below);