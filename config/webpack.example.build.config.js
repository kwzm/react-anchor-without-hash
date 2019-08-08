const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.config')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../example/index.js'),
  output: {
    path: path.resolve(__dirname, '../docs'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', {
              'targets': {
                'ie': '9'
              }
            }]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html')
    })
  ]
})