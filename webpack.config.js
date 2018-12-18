const path = require('path');
const webpack = require('webpack');

module.exports = env => {
  return {
    // mode: 'production',
    // mode: 'development',
    devtool: 'source-map',
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
      // noParse: /mapbox-gl/
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader/useable',
              options: {
                singleton: true
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                hashPrefix: 'hash',
                localIdentName: '[local]__[path][name]__mlk-sc-map-travel-time--[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'postcss-loader'
            }
          ]
        }
      ]
    },
    plugins: []
  };
};
