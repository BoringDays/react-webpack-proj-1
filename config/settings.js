var port = 8080;
var srcPath = './src/';
var outputPath = './dist/';

module.exports = {
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
        noInfo: false
    }
};
