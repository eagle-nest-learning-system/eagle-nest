import { isAlpha } from 'validator';

export default str => str.split(' ').every(word => isAlpha(word));
