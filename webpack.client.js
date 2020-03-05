const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const clientConfig = {
  devtool: "source-map",
  entry: "./src/client",
  output: {
    filename: "js/bundle.[hash:5].js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!favicon.ico"]
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.[hash:5].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
      },
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:5].[ext]"
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(baseConfig, clientConfig);
