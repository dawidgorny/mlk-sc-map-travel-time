const path = require('path');

module.exports = {
  root: process.cwd(),
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    // 'autoprefixer': {},
    'postcss-nested': {},
    'postcss-url': {},
    'cssnano': {}
  }
};
