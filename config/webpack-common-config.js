// webpack-common-config.js

// This file will contain configuration data that
// is shared between development and production builds.

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const paths = require("./paths");

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    main: paths.appIndexJs
  },
  module: {
    rules: [{
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml
    })
  ],
  resolve: {
    // File extensions. Add others and needed (e.g. scss, json)
    extensions: [".js"],
    modules: ["node_modules"],
    alias: {
      Components: path.resolve(paths.appSrc, "js/components")
    }
  }
};
