const lint = require('mocha-eslint');

// Array of paths to lint
// Note: a seperate Mocha test will be run for each path and each file which
// matches a glob pattern
const paths = [
  'pages/**/*.js',
  'pages/**/*.jsx',
  'components/**/*.js',
  'components/**/*.jsx',
  'lib',
  'etc',
  'data',
];

const options = {
  // Specify style of output
  formatter: 'stylish', // Defaults to `stylish`

  // Only display warnings if a test is failing
  alwaysWarn: false, // Defaults to `true`, always show warnings

  // Increase the timeout of the test if linting takes to long
  timeout: 5000, // Defaults to the global mocha `timeout` option

  // Increase the time until a test is marked as slow
  slow: 1000, // Defaults to the global mocha `slow` option

  // Consider linting warnings as errors and return failure
  strict: true, // Defaults to `false`, only notify the warnings

  // Specify the mocha context in which to run tests
  contextName: 'eslint', // Defaults to `eslint`, but can be any string

  exclude: ['**/node_modules/**', '**/bower_components/**'],
};

// Run the tests
lint(paths, options);
