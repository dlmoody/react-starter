var path = require('path');
var copyWPPlugin = require('copy-webpack-plugin');


function loadPlugins(){
  var plugins = [];
  plugins.push(new copyWPPlugin([
    {from: path.resolve(__dirname, 'index.html')}
  ]));
  return plugins;
}

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
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: loadPlugins()
}
