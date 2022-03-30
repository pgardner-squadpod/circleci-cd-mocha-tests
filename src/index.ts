import {TestFunc} from './testFunc';

const testFunc = new TestFunc();

console.info('The color is', testFunc.getColor());
console.info(`The answer is ${testFunc.getNumber()}`);