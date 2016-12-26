var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var settings = require('./config/settings');
var path = require('path');

// 直接访问localhost:(port)会出问题，应该访问localhost:(port)/webpack-dev-server

// $ webpack： 生成目标文件
// $ webpack -p：生成目标文件，并混淆压缩
// $ webpack -d：生成目标文件，带有source map
// $ webpack --watch：生成目标文件，并监听
// http://webpack.github.io/docs/cli.html

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:' + settings.port, // 如果用到后端服务器的话，可以直接改这里的IP和端口；命令行里面--host 127.0.0.0 --port 1024 可以改端口和IP
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  // debug: true,
  // devtool: 'eval-source-map', // faster in development
  devServer: settings.serverSetting,
  devtool: 'source-map',
  output: {
    // path: path.resolve(__dirname, 'dist'), // 输出路径
    path: settings.outputPath,
    publicPath: '/', // 启用服务器（webpack-dev-server/react-hot-loader）的路径，也是HtmlWebpackPlugin里面，js的引用路径；注意后面的/
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [ // todo 为什么有时候要改成loader才能用？
      {
        test: /\.(sass|scss)$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
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
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      template: './src/index.hbs', // 听说为了兼容mac os，需要拼接绝对路径？ path.join(__dirname, settings.sourcePath, 'index.hbs'),
      filename: 'index.html'
    })
  ]
};
