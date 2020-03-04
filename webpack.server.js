const path = require("path");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");
const serverConfig = {
  devtool: "none",
  entry: "./src/server",
  target: "node",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "./dist")
  }
};

module.exports = merge(baseConfig, serverConfig);
