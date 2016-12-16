var path = require('path');
//var os = require('os');
//var ipTable = {};
//var ifaces = os.networkInterfaces();

//for (var dev in ifaces) {
//  ifaces[dev].forEach(function (details, alias) {
//    if (details.family == 'IPv4') {
//      ipTable[dev + (alias ? ':' + alias : '')] = details.address;
//    }
//  });
//}

//ipTable:
//{ '无线网络连接 5:1': '192.168.191.1',
//  '本地连接:1': '192.168.16.78',
//  'Loopback Pseudo-Interface 1:1': '127.0.0.1' }

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
    stats: {colors: true},
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 需要连接的地址，目前服务器用本机IP+3000端口
        secure: false
      }
    }
  }
};
