const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@reducer": path.resolve(__dirname, 'src/reducers/')
    }
  }
};