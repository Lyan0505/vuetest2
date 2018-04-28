const path = require("path");

const webpack = require("webpack");

const config = require("./config");

module.exports = {
  entry: {
    app: [config.srcPath + "app.js"], //入口文件
    common: ["vue", "vue-router", "vuex"], //vue模块
    polyfill: ["babel-polyfill"], //补全es6原生对象
    ued: [config.srcPath + "/component/index.js"], //ued组件
   
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 6000,
              name: "images/[name]_[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
      
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
     
      {
        test: /\.(woff|woffz|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },

  resolve: {
    //配置别名，在项目中可缩减引用路径
    alias: {
      config: __dirname + "/../src/config/index.js",
      ued: __dirname + "/../src/component/index.js",
      //comp: __dirname + "/../src/component/index.js",
      util: __dirname + "/../src/utils/index.js",
      "@": path.join(__dirname, "..", "src")
    }
  },
  plugins: [
    //提供全局的变量，在模块中使用无需用require引入
    // new webpack.ProvidePlugin({
    //     Util: __dirname + '/../src/utils/index.js',
    //  }),

    //将公共代码抽离出来合并为一个文件
    new webpack.optimize.CommonsChunkPlugin({
      name: ["chunk", "common", "polyfill", "ued"],
      minChunks: 2
    }),

    // 拆分，让webpack提取公共方法
    new webpack.optimize.CommonsChunkPlugin({
      name: "app",
      async: true,
      minChunks: 2,
      children: true
    })
  ]
};
