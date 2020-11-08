
var glob = require('glob');

const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: 'web',
  resolve: {
    fallback: { /*"path": require.resolve("path-browserify"),
                "zlib": require.resolve("browserify-zlib"), 
                "querystring": require.resolve("querystring-es3"),
                "assert": require.resolve("assert/"),
                "buffer": require.resolve("buffer/"),
                "stream": require.resolve("stream-browserify"),
                "crypto": require.resolve("crypto-browserify"),
                "http": require.resolve("stream-http"),
                "locale": require.resolve("locale"),
                "popper": require.resolve("popper"),
                "url": require.resolve("url/")*/
               } 
  },
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
     {
       test: /\.(scss|css)$/,
       exclude: /node_modules/,
       use:[
         {
           loader: MiniCssExtractPlugin.loader,
           options: {
             reloadAll: true,             
           }
         },
         'css-loader',
         'postcss-loader',
         'sass-loader'
       ]
     }

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
    }),
     new MiniCssExtractPlugin({
        filename: '[name].css'
     }),     
   ]
}