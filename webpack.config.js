'use strict';

var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var plugins = [
   new UglifyJsPlugin({
      uglifyOptions: {
         warnings: false,
         ie8: false,
         output: {
            comments: false
         }
      }
   })
];

module.exports = {

   entry: './entry.js',

   // Options affecting the output.
   output: {
      path: path.join(__dirname, './django_webpack/static/build'),
      // The filename of the entry chunk as relative path inside the output.path directory.
      filename: 'main.js'
   },

   watchOptions: {
      aggregateTimeout: 100
   },

   plugins: plugins,


   // Options affecting the normal modules
   module: {
      // A array of automatically applied loaders.
      rules: [
         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
               plugins: ["transform-object-rest-spread", "transform-object-assign"],
               presets: ['@babel/preset-env']
            }
         }
      ]
   }
};
