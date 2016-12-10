var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    preLoaders: [],
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')},
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'},
      {test: /\.html$/, loader: 'raw'}
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new ExtractTextPlugin('[name].[hash].css')
  ],
  devServer: {
    contentBase: './src/public',
    stats: 'minimal'
  }
}
