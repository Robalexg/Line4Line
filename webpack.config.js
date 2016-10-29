var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
  entry: path.join(__dirname, 'client'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },

      { 
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      
      { 
        test: /\.png$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
