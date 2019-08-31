const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: path.join(__dirname, "index.js")
});
