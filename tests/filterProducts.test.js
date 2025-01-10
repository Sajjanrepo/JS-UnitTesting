const filterProducts = require('../src/functions/filterProducts');

describe('filterProducts', () => {

  // Positive Test Case: Valid input with matching products
  test.each([
    [
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
        { name: 'Grapes', price: 200 },
      ],
      'apple',
      [{ name: 'Apple', price: 100 }],
    ],
    [
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
        { name: 'Grapes', price: 200 },
      ],
      'BANANA',
      [{ name: 'Banana', price: 50 }],
    ],
    [
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
        { name: 'Grapes', price: 200 },
      ],
      'grape',
      [{ name: 'Grapes', price: 200 }],
    ],
  ])(
    'should return products that match the query (case insensitive)',
    (products, query, expected) => {
      expect(filterProducts(products, query)).toEqual(expected);
    }
  );

  // Test Case: No matching products
  test.each([
    [
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
      ],
      'orange',
      [],
    ]
  ])(
    'should return an empty array if no products match the query',
    (products, query, expected) => {
      expect(filterProducts(products, query)).toEqual(expected);
    }
  );

  // Edge Case: Products is an empty array
  test.each([
    [[], 'apple', []]
  ])(
    'should return an empty array if products is empty',
    (products, query, expected) => {
      expect(filterProducts(products, query)).toEqual(expected);
    }
  );

  // Edge Case: Empty query string
  test.each([
    [
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
      ],
      '',
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
      ],
    ],
  ])(
    'should return all products if the query is an empty string',
    (products, query, expected) => {
      expect(filterProducts(products, query)).toEqual(expected);
    }
  );

  // Edge Case: Products is not an array
  test.each([
    ['not an array', 'apple', 'Invalid input'],
  ])(
    'should throw an error if products is not an array',
    (products, query, expectedError) => {
      expect(() => filterProducts(products, query)).toThrow(expectedError);
    }
  );

  // Edge Case: Query is not a string
  test.each([
    [
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
      ],
      123,
      'Invalid input',
    ],
    [
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
      ],
      null,
      'Invalid input',
    ],
    [
      [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 },
      ],
      undefined,
      'Invalid input',
    ],
  ])(
    'should throw an error if query is not a string',
    (products, query, expectedError) => {
      expect(() => filterProducts(products, query)).toThrow(expectedError);
    }
  );

  // Edge Case: Product name contains special characters
  test.each([
    [
      [
        { name: 'Appl3', price: 100 },
        { name: 'Banana!', price: 50 },
      ],
      '3',
      [{ name: 'Appl3', price: 100 }],
    ],
    [
      [
        { name: 'Appl3', price: 100 },
        { name: 'Banana!', price: 50 },
      ],
      '!',
      [{ name: 'Banana!', price: 50 }],
    ],
  ])(
    'should handle edge cases where product names contain special characters',
    (products, query, expected) => {
      expect(filterProducts(products, query)).toEqual(expected);
    }
  );
});

