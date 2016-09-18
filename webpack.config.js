var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

// $ webpack： 生成目标文件
// $ webpack -p：生成目标文件，并混淆压缩
// $ webpack -d：生成目标文件，带有source map
// $ webpack --watch：生成目标文件，并监听
// http://webpack.github.io/docs/cli.html

module.exports = {
    entry: [
        // 'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080', // 如果用到后端服务器的话，可以直接改这里的IP和端口
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        path.resolve(__dirname, 'src/main.js')
    ],
    output: {
        // path: path.resolve(__dirname, 'dist'), // 输出路径
        path: 'dist',
        publicPath: 'dist', // 启用服务器（webpack-dev-server/react-hot-loader）的路径，也是HtmlWebpackPlugin里面，js的引用路径
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
                // loaders: ['react-hot','babel'] // 此写法不推荐，会报错；似乎和npm 3有关，需要改写在.babelrc的plugins里面；报错信息有讲
                loader: 'babel'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
            template: 'src/index.hbs',
            filename: 'dist/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false // Suppress uglification warnings
            }
        })
    ]
};
