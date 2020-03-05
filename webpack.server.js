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
  },
  module: {
    rules: [{ test: /\.css$/, use: ["isomorphic-style-loader", "css-loader?modules"] }]
  }
};

module.exports = merge(baseConfig, serverConfig);
