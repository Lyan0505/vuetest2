const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //webpack html 打包模块

const webpackMerge = require('webpack-merge');

const mainConfig = require('./main.config');

const config = require('./config');

Object.keys(mainConfig.entry).forEach(function (name) {

  mainConfig.entry[name] = [__dirname + '/dev.client'].concat(mainConfig.entry[name])
})

module.exports = webpackMerge(mainConfig, {
    devtool: '#source-map',
    output: {
        path: path.join(__dirname, '../dev/'), //构建目录
        filename: '[name].js',
        publicPath:'/',
    },

    module: {
        rules: []
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),

        //根据模板插入css/js等生成最终HTML
        new HtmlWebpackPlugin({
            // favicon: config.srcPath + '/favicon.ico',
            filename: 'index.html', 
            template: config.srcPath + '/index.html', 
            inject:true,

            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
        })
    ]

});