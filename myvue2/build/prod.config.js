const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //webpack html 打包模块

const webpackMerge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const mainConfig = require('./main.config');

const config = require('./config');

const rm = require('rimraf');

module.exports = webpackMerge(mainConfig, {

    output: {
        path: path.join(__dirname, '../dist/'), //构建目录
        filename: '[name].[chunkhash:8].js'
    },

    module: {
        rules: []
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        //根据模板插入css/js等生成最终HTML
        new HtmlWebpackPlugin({
            // favicon:config.srcPath + '/favicon.ico',
            filename: 'index.html',
            template: config.srcPath + '/index.html',
            inject: true,

            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        })
    ]

});

//删除dist文件夹
rm(path.join(config.distPath), err => {
    if (err) {
        throw err
    }
    console.log(config.distPath+' has been removed.');
});
