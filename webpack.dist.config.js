const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devtool: 'eval',
  entry: './src/index',
  output: {
    library: 'Redux Filter',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'react-redux-filter.js',
  },
};
