const sortProducts = require('../src/functions/sortProducts');

describe('sortProducts', () => {

  // Positive Test Cases with Parameterization
  test.each([
    [
      [
        { name: 'Apple', price: 10 },
        { name: 'Banana', price: 5 },
        { name: 'Orange', price: 8 }
      ],
      'price',
      [5, 8, 10]
    ],
    [
      [
        { name: 'Banana', price: 5 },
        { name: 'Apple', price: 10 },
        { name: 'Orange', price: 8 }
      ],
      'name',
      ['Apple', 'Banana', 'Orange']
    ]
  ])(
    'should correctly sort products by %s',
    (products, key, expectedSortedValues) => {
      const sorted = sortProducts(products, key);

      if (key === 'price') {
        expectedSortedValues.forEach((value, index) => {
          try {
            expect(sorted[index].price).toBe(value);
          } catch (error) {
            throw new Error(`Expected product at index ${index} to have price ${value}, but got ${sorted[index].price}`);
          }
        });
      } else if (key === 'name') {
        expectedSortedValues.forEach((value, index) => {
          try {
            expect(sorted[index].name).toBe(value);
          } catch (error) {
            throw new Error(`Expected product at index ${index} to have name "${value}", but got "${sorted[index].name}"`);
          }
        });
      }
    }
  );

  // Negative Test Cases with Parameterization
  test.each([
    ['not an array', 'price', 'Invalid input'],
    [{ name: 'Apple', price: 10 }, 'invalid', 'Invalid input'],
    [
      [{ name: 'Apple', price: 10 }, { name: 'Banana', price: 'five' }],
      'price',
      'Invalid input'
    ]
  ])(
    'should throw an error when input is %s and key is %s',
    (products, key, expectedError) => {
      try {
        sortProducts(products, key);
      } catch (error) {
        expect(error.message).toBe(expectedError);
      }
    }
  );

  // Edge Cases with Parameterization
  test.each([
    [[], 'price', []],
    [[{ name: 'Apple', price: 10 }], 'name', [{ name: 'Apple', price: 10 }]]
  ])(
    'should handle edge cases: %s and key %s',
    (products, key, expectedResult) => {
      const sorted = sortProducts(products, key);
      try {
        expect(sorted).toEqual(expectedResult);
      } catch (error) {
        throw new Error(`Expected sorted result to be ${JSON.stringify(expectedResult)}, but got ${JSON.stringify(sorted)}`);
      }
    }
  );
});

