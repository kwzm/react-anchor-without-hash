const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: path.join(__dirname, "index.js"),
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "dist",
    compress: true,
    port: 9000,
    hot: true,
    overlay: true
  }
});
