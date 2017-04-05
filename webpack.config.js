const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");


const BUILD_DIR = path.resolve(__dirname, "build");
const APP_DIR = path.resolve(__dirname, "src");

// https://github.com/postcss/postcss-loader/issues/92
const plugins = [
  new HtmlWebpackPlugin({
    template: "index.ejs"
  }),
  new ExtractTextPlugin("styles.css"),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            "last 3 version",
            "ie >= 10"
          ]
        }),
        require("postcss-import"),
        require("postcss-custom-media")
      ]
    }
  })
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{
      loader: "babel-loader",
      options: {
        presets: ["es2015","react","stage-0"]
      }
    }]
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    use: "url-loader?limit=100000"
  },
  {
    test: /\.css/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: "style-loader",
      loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
    })
  }
];

module.exports = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: "[name]-[hash].js"
  },
  module: {
    rules
  },
  plugins
};
