import { expect } from 'chai';
import { TestFunc } from '.';

describe("TestFunc Tests", () => {
    it('Initializes values OK', () => {
        const testColor = "yellow";
        const testNumber = 21;
        const test = new TestFunc(testColor, testNumber);

        expect(test.getColor()).to.equal(testColor);
        expect(test.getNumber()).to.equal(testNumber);
    });
    it('Defaults color to "blue"', () => {
        const test = new TestFunc();
        const expected = "blue";

        expect(test.getColor()).to.equal(expected);
    });
    it('Sets color', () => {
        const test = new TestFunc();
        const newColor = "red";
        test.setColor(newColor);

        expect(test.getColor()).to.equal(newColor);
    });
    it('Defaults number to 42', () => {
        const test = new TestFunc();
        const expected = 42;

        expect(test.getNumber()).to.equal(expected);
    });
    it('Sets number', () => {
        const test = new TestFunc();
        const newNumber = 7;
        test.setNumber(newNumber);

        expect(test.getNumber()).to.equal(newNumber);
    });

    it('Sums numbers', () => {
        const test = new TestFunc(); // 42
        const sumValue = 8;
        const expected = 50;

        expect(test.sumNumber(sumValue)).to.equal(expected);
    });
    it('Subtracts numbers', () => {
        const test = new TestFunc(); // 42
        const subValue = 2;
        const expected = 40;

        expect(test.subtractNumber(subValue)).to.equal(expected);
    });
    it('Multiplies numbers', () => {
        const test = new TestFunc(); // 42
        const multValue = 3;
        const expected = 126;

        expect(test.multiplyNumber(multValue)).to.equal(expected);
    });
    it('Divides numbers', () => {
        const test = new TestFunc(); // 42
        const divValue = 21;
        const expected = 2;

        expect(test.divideNumber(divValue)).to.equal(expected);
    });
});