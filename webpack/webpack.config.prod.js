const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'whatwg-fetch',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Fintacimal',
      template: 'index.ejs',
      baseHref: '/',
      appMountId: 'root',
      mobile: true,
      devServer: true,
    }),
    new webpack.DefinePlugin({
      'process-env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel-loader' ],
      include: path.join(__dirname, '../src'),
    }, {
      test: /\.scss$/,
      loaders: [ 'style', 'css', 'sass' ],
      include: path.join(__dirname, '../css'),
    }, {
      test: /\.(jpg|png)$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
      },
    }]
  }
}
