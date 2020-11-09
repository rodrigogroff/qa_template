
var glob = require('glob');

const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  context: path.resolve(__dirname, './'),  
  entry: { './src/static/js/app' : glob.sync('./src/static/js/**/*.js')},
   output: {
    globalObject: "this",
     path: path.resolve(__dirname, 'dist')
   },
   module: {
     rules: [{
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       loader: 'babel-loader'
     },
    ]
   },
   plugins: [
     new MinifyPlugin({}, {
        comments: false
     }),
     new CleanWebpackPlugin(),
     new CopyPlugin({
      patterns: [
        {from: './index.html', to: './index.html'},
        {from: './server.js', to: './server.js'},
      ],
      options:{
        concurrency:100,
      }
    })
  ]
}