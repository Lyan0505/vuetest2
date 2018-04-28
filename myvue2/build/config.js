const path = require('path')
module.exports = {
    srcPath: __dirname + '/../src/', //源码路径
    distPath: path.resolve(__dirname, '../dist'), // dist 路径
    port: 80,   // 3000, 需要使用 80 端口，并绑定 huishou.m.jd.com 才能使用跨域请求 hsc.jd.com 
    hostName: 'yanyan.lei.com', // localhost
     proxy: [
    //     ['/aihuishou-api', 'http://116.228.54.90:54999/jd', ''],
     ]
}