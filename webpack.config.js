"use strict";

const { resolve } = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  devtool: "source-map",
  performance: { hints: false },
  entry: resolve(__dirname, "src", "editor.js"),
  output: {
    library: "ClassicEditor",
    path: resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "umd",
    libraryExport: "default",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        minify: TerserWebpackPlugin.swcMinify,
        terserOptions: {
          compress: true,
          output: { comments: false },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  resolve: {
    extensions: [".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
