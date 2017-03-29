const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'whatwg-fetch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Fintacimal',
      template: 'index.ejs',
      baseHref: '/',
      appMountId: 'root',
      mobile: true,
      devServer: true,
    })
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
