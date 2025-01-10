//const path = require('path');
//
//module.exports = {
//
//    // Define the root directories for Jest to look for source and test files
//    roots: ['<rootDir>/src', '<rootDir>/tests'],
//
//    testEnvironment: 'node',
//
//    verbose: true,
//
//    // Define custom reporters to generate reports in desired formats
//    reporters: [
//        'default',
//        [
//            'jest-html-reporter',
//            {
//                outputPath: path.resolve(__dirname, 'reports/report.html'),
//                pageTitle: 'Test Report',
//                includeFailureMsg: true,
//                includeConsoleLog: true,
//            },
//        ],
//    ],
//    //Setup file to perform actions before/after each test
//    setupFilesAfterEnv: [
//        './jest.setup.js',
//    ],
//};

const path = require('path');

module.exports = {
    // Define the root directories for Jest to look for source and test files
    roots: ['<rootDir>/src', '<rootDir>/tests'],

    testEnvironment: 'node',

    verbose: true,

    // Define custom reporters to generate reports in desired formats
    reporters: [
        'default',
        [
            'jest-html-reporter',
            {
                outputPath: path.resolve(__dirname, 'reports/report.html'),
                pageTitle: 'Test Report',
                includeFailureMsg: true,
                includeConsoleLog: true,
            },
        ],
    ],

    // Setup file to perform actions before/after each test
    setupFilesAfterEnv: [
        './jest.setup.js',  // This is the setup file where console logging will be handled
    ],
};
