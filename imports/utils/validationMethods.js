import { isAlpha, equals } from 'validator';

export const isAlphaSpace = str => str.split(" ").every(word => isAlpha(word));