const path = require("path");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");
const serverConfig = {
  devtool: "none",
  entry: "./src/server",
  target: "node",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath:"/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["isomorphic-style-loader", "css-loader?modules"]
      },
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:5].[ext]",
              emitFile: false
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(baseConfig, serverConfig);
