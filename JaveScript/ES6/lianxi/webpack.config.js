const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // devServer: {
  //   static: "./dist",
  // },
  // optimization: {
  //   runtimeChunk: "single",
  // },
  entry: {
    index: "./assets/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "imgs/[name][ext]",
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
            options: {
              // publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      // {
      //   test: /\.(png|jpg|gif|jpeg)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[path][name].[ext]",
      //     },
      //   },
      // },
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
      filename: "./styles/[name].css",
    }),
  ],
};
