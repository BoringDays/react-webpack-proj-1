var path = require('path');

var port = 8080;
var srcPath = '../src/';
var outputPath = '../dist/';
var publicPath = './public/';
// var outputPath = path.join(__dirname, '../dist/');

module.exports = {
  dbLink: '',
  port: port,
  sourcePath: srcPath,
  outputPath: outputPath,
  serverSetting: {
    contentBase: outputPath,
    inline: true,
    hot: true,
    historyApiFallback: true, // 官网说设置为true有利于html5路由的使用
    port: port,
    publicPath: outputPath,
    noInfo: false,
    stats: {colors: true},
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 需要连接的地址，目前服务器用本机IP+3000端口
        secure: false
      }
    }
  }
};
