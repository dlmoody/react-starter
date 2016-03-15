var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        }
      },
      {
        test: /\.js$/,
        exclude: /(bower_components|node_modules)/,
        loader: 'babel',
        query:
          {
            presets:['es2015', 'react', 'stage-1']
          }
      }],
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9000',
    path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  }
}
