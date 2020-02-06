const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const srcPath = "./Vue/src/";
const exportPath = "./";
process.env.NODE_ENV == "development";

module.exports = {
  entry: { main: path.resolve(srcPath, "main.js") },
  output: {
    path: path.resolve(exportPath, "wwwroot/js/Vue/"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    },
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      "~": path.resolve(srcPath),
      "@Components": path.resolve(srcPath, "Components"),
      "@Shared": path.resolve(srcPath, "Components/Shared")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "~/Global/variables.scss";`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "../../css/Vue/[name].css" }),
    new VueLoaderPlugin()
  ]
};
