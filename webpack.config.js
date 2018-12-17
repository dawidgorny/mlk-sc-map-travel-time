const path = require('path');
const webpack = require('webpack');

module.exports = env => {
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './examples/'
    },
    entry: {
      'mlk-sc-map-travel-time': './index.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist/')
    },
    module: {
      noParse: (content) => /mapbox-gl/.test(content)
    },
    plugins: []
  };
};
