const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '..'),
  devtool: '#inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './example/src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        loaders: ['react-hot', 'babel'],
        include: [
          path.join(__dirname, 'src'),
          path.resolve(__dirname, '../src'),
        ],
      },
      {
        test: /.html$/,
        loaders: ['file?name=[name].[ext]'],
      },
      {
        test: /.css$/,
        loaders: ['file?name=[name].[ext]'],
      },
    ],
  },
};
