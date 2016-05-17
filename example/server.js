/* eslint-disable no-console */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const devServer = new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
});

devServer.listen(3000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('Listening at http://localhost:3000/');
});
