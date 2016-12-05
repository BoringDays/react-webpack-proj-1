var path = require('path');

var port = 8080;
var srcPath = './src/';
var outputPath = './dist/';
// var outputPath = path.join(__dirname, '../dist/');

module.exports = {
  dbLink: '',
  port: port,
  sourcePath: srcPath,
  outputPath: outputPath,
  serverSetting: {
    contentBase: srcPath,
    inline: true,
    hot: true,
    historyApiFallback: true, // 官网说设置为true有利于html5路由的使用
    port: port,
    publicPath: outputPath,
    noInfo: false,
    stats: { colors: true }
  }
};
