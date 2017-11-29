import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout.js';

console.log(kebabCase("Wes is so cool"));

console.log(addTax(100, 0.15));
