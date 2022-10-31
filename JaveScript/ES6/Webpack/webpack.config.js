//不想导出的写在module.exports外面
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        // loader: "css-loader",
        //配置多个loader处理同一个类型的文件时，使用use
        //这里需要注意的是，使用顺讯是从右到左
        //先加载css，在交给style处理css文件
        // use: ["style-loader", "css-loader"],
        // 不使用style-loader，通过提取css到link加载
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./style/[name].css",
    }),
  ],
};
