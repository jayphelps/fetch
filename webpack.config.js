const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'whatwg-fetch.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'WHATWGFetch',
    libraryTarget: 'umd'
  }
};
