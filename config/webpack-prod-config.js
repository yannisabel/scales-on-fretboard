// webpack-prod-config.js

// contains configuration data related to prod build

const path = require("path");

const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const globImporter = require('node-sass-glob-importer');

const paths = require("./paths");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name]_[chunkhash].js",
    path: paths.appBuild
  },
  plugins: [
    // Uglify to minify your JavaScript
    new UglifyJSPlugin(),
    // Set process.env.NODE_ENV to production
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name]_[chunkhash].css',
    }),
  ],
  module: {
    rules: [
      {
        // look for .js files
        test: /\.(js)$/,
        // in the `src` directory
        include: path.resolve(paths.appSrc),
        exclude: /node_modules/,
        use: {
          // use babel for transpiling JavaScript files
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        // look for .css or .scss files.
        test: /\.(css|scss)$/,
        // in the `src` directory
        include: [path.resolve(paths.appSrc)],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              discardDuplicates: true,
              sourceMap: false,
              modules: true,
              localIdentName: '[local]__[hash:base64:5]'
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter(),
            }
          }
        ],
      },
    ]
  }
});
