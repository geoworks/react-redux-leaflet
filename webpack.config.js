const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-redux-leaflet.js',
    libraryTarget: 'commonjs',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js'],
  },
  externals: {
    debounce: true,
    immutable: true,
    leaflet: true,
    react: true,
    'react-dom': true,
    'react-immutable-proptypes': true,
    'react-redux': true,
    redux: true,
    reselect: true,
    events: true,
  },
};
