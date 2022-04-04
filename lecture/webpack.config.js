const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // poroduction
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "./dist",
  },
};
