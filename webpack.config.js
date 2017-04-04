var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    })
  ]
}
