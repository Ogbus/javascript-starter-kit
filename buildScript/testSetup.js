// This file isn't tanspiled, so it must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register');

require.extensions['.css'] = function() {}