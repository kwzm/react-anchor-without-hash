const path = require('path')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const commonConfig = require('./webpack.common.config')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/Anchor.js'),
  output: {
    filename: 'Anchor.js',
    path: path.resolve(__dirname, '../lib'),
    libraryTarget: 'commonjs2'
  },
  externals: ['react', 'prop-types'],
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})