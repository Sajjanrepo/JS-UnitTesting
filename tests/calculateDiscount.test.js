const calculateDiscount = require('../src/functions/calculateDiscount');

describe('calculateDiscount', () => {

    // Test case 1: Valid inputs
    test('should return the correct discounted price for valid inputs', () => {
        expect(calculateDiscount(100, 20)).toBe(80);
        expect(calculateDiscount(200, 50)).toBe(100);
    });

    test('should return the original price if discount is 0', () => {
        expect(calculateDiscount(100, 0)).toBe(100);
    });

    test('should return 0 if discount is 100', () => {
        expect(calculateDiscount(100, 100)).toBe(0);
    });

    // Test case 2: InValid inputs
    test('should throw an error for negative price', () => {
        expect(() => calculateDiscount(-100, 20)).toThrow('Invalid input');
    });

    test('should throw an error for negative discount', () => {
        expect(() => calculateDiscount(100, -20)).toThrow('Invalid input');
    });

    test('should throw an error if discount is greater than 100', () => {
        expect(() => calculateDiscount(100, 150)).toThrow('Invalid input');
    });

    // Test case 3: Edge cases
    test('should handle edge cases correctly', () => {
        expect(calculateDiscount(0, 0)).toBe(0);
        expect(calculateDiscount(0, 50)).toBe(0);
    });
});
