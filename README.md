# JavaScript Unit Testing for Web Application Operations

## Overview

This repository contains a set of unit tests designed to evaluate and verify JavaScript functions commonly used in web applications. The project utilizes Jest, a widely adopted testing framework, to ensure that the following functions behave correctly across different test cases, including edge cases and error handling:

- `calculateDiscount(price, discount)`
- `filterProducts(products, query)`
- `sortProducts(products, key)`
- `validateEmail(email)`

### Functions to Test

1. **`calculateDiscount(price, discount)`**: 
   - **Description**: Calculates the final price after applying a discount percentage.
   - **Input**: 
     - `price`: Number (the original price of a product).
     - `discount`: Number (the discount percentage).
   - **Output**: Final price (number).

2. **`filterProducts(products, query)`**: 
   - **Description**: Filters a list of products by name based on a search query.
   - **Input**: 
     - `products`: Array of objects with product names and prices.
     - `query`: String (search query to filter products by name).
   - **Output**: Filtered array of products.

3. **`sortProducts(products, key)`**: 
   - **Description**: Sorts a list of products by a specified key (name or price).
   - **Input**: 
     - `products`: Array of objects with product names and prices.
     - `key`: String (either 'name' or 'price').
   - **Output**: Sorted array of products.

4. **`validateEmail(email)`**: 
   - **Description**: Validates an email address format.
   - **Input**: 
     - `email`: String (email address).
   - **Output**: Boolean (true if valid, false otherwise).

## Testing Requirements

1. **Coverage**: 
   - Tests cover both positive and negative scenarios for all functions.
   - Edge cases and error handling are explicitly tested.
   
2. **Framework**:
   - **Jest** is used as the testing framework to run the unit tests.
   
4. **Reporting**:
   - A test coverage report is generated and included in the repository.
   - Any failing tests are highlighted with detailed error logs.


### Prerequisites

Ensure that you have the following installed on your system:

- **Node.js**: Version 14 or later.
- **NPM**: Node Package Manager, typically comes with Node.js.

### Installation

1. Clone the repository:
   git clone https://github.com/Sajjanrepo/JS-UnitTesting.git
   
2.Navigate to the project directory:
   cd javascript-unit-tests
   
3.Install the dependencies
   npm install --save-dev jest

## Run the script present in tests directory along with coverage report generation in coverage directory (index.html)
   npm test <file.test.js> -- --coverage

## Frameworks and Tools Used
   Jest: A JavaScript testing framework used for running the tests.
   Node.js: The JavaScript runtime environment.
   NPM: The Node Package Manager to handle dependencies.
   IDE: PyCharm Community

## Assumptions and Constraints
   All functions assume that the inputs are well-formed (e.g., prices and discounts are numbers). 
   Input validation is performed where necessary.
      
   

   
   
