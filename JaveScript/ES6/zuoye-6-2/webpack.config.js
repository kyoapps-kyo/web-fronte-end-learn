const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./assets/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "static/imgs/[name][ext]",
    // filename: "static/js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.(html|html)$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./[name].html",
    }),
    new MiniCssExtractPlugin({
      filename: "./static/styles/[name].css",
    }),
  ],
};
