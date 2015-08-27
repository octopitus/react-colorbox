// Webpack config for development
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  watch: true,
  entry: {
    main: ['webpack/hot/dev-server', path.resolve(__dirname, './docs/index.js')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader?experimental']}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'react-colorbox': path.resolve(__dirname, './src/index.js'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'reactcss': path.resolve(__dirname, './node_modules/reactcss')
    },
    modulesDirectories: ['node_modules', 'src']
  }
};