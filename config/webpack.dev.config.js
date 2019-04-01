const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.config')

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: path.resolve(__dirname, '../example/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html')
    })
  ]
})