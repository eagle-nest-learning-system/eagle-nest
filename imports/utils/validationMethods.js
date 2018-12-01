import { isAlpha } from 'validator';

// eslint-disable-next-line import/prefer-default-export
export const isAlphaSpace = str => str.split(' ').every(word => isAlpha(word));
