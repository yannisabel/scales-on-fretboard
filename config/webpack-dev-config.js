// webpack-dev-config.js

// configuration data related to development only
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const paths = require('./paths');
// import common webpack config
const common = require('./webpack-common-config.js');
const Jarvis = require('webpack-jarvis');

const Port = 3000;
const jarvisPort = 3100;

module.exports = merge(common, {
  mode: 'development',
  performance: {
    hints: 'warning'
  },
  output: {
    filename: "js/[name]_[hash].js",
    path: paths.appBuild
  },
  devServer: {
    port: Port,
    contentBase: path.resolve(__dirname, 'src'),
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[hash].css',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new Jarvis({
      port: jarvisPort
    }),
    new HtmlWebpackPlugin({
      template: paths.appHtml
    })
  ],
  module: {
    rules: [
      {
        // look for .js or .jsx files
        test: /\.(js)$/,
        // in the `src` directory
        include: path.resolve(paths.appSrc),
        exclude: /(node_modules)/,
        use: {
          // use babel for transpiling JavaScript files
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      },
      {
        // look for .css or .scss files
        test: /\.(scss)$/,
        // in the `src` directory
        include: [path.resolve(paths.appSrc)],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              discardDuplicates: true,
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              syntax: 'postcss-scss',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              importer: globImporter()
            },
          },
        ],
      },
    ]
  }
});
