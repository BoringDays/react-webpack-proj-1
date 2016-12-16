var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var settings = require('./config/settings');
var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendors: ['react', 'react-dom', 'react-router', 'material-ui', 'immutable']
  },
  devtool: 'source-map',
  output: {
    // path: path.resolve(__dirname, 'dist'), // 输出路径
    path: settings.outputPath,
    publicPath: '/', // 启用服务器（webpack-dev-server/react-hot-loader）的路径，也是HtmlWebpackPlugin里面，js的引用路径；注意后面的/
    filename: 'js/app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [ // todo 为什么有时候要改成loader才能用？
      {
        test: /\.(sass|scss)$/,
        // loader: 'style!css!sass?sourceMap'
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')
      },
      {
        test: /\.css$/,
        // loader: 'style!css'
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars'
      },
      {
        test: /\.jsx?$/, // 匹配js与jsx后缀
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        // loaders: ['react-hot','babel'] // 此写法不推荐，会报错；似乎和npm 3有关，需要改写在.babelrc的plugins里面，“"plugins": ["react-hot-loader/babel"],”；报错信息有讲
        loader: 'babel'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    // 设置环境变量
    // 等效于npm scripts 的 set NODE_ENV=production && ... ？
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'prod'
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/app.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      // template: path.join(__dirname, settings.sourcePath, 'index.hbs'),
      template: './src/index.hbs',
      filename: 'index.html',
      inject: true,
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/common.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false // Suppress uglification warnings
      }
    })
  ]
};

