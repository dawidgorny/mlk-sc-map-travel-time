const path = require('path');

module.exports = {
  root: process.cwd(),
  plugins: {
    'postcss-url': {
      url: 'inline'
    }
  }
};
