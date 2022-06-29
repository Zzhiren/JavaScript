const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const HappyPack = require('happypack')
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

module.exports = {
  output: {
    clean: true
  },
  devServer: {
    hot: true,
    liveReload: false
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: ['babel-loader?cacheDirectory']
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['happypack/loader?id=babel']
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: 'vendor', // chunk 名称
          test: /node_modules/,
          priority: 1, // 权限，越大越高
          minSize: 0, // 小于minSize的模块不进行抽离
          minChunks: 1, // 少于 minChunks 复用次数的模块不进行抽离
        },
        common: {
          name: 'common', // 名称
          priority: 0, // 优先级
          minSize: 0, // 大小限制
          minChunks: 2 // 公共模块最少复用几次
        }
      }
    }
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new HtmlWebpackPlugin({
      title: 'webpack5-index',
      filename: 'index.html',
      template: 'src/index.html',
      // templateContent: () => {
      //   return `
      //     <html lang="en">
      //       <head>
      //         <meta charset="UTF-8">
      //         <title>webpack</title>
      //       </head>
      //       <body>
      //         <div id="root"></div>
      //       </body>
      //     </html>
      //   `
      // },
      templateParameters: {
        'appName': 'webpack-demo'
      },
    }),
    new HtmlWebpackPlugin({
      title: 'webpack5-main',
      filename: 'main.html',
      template: 'src/index.html',
      // templateContent: () => {
      //   return `
      //     <html lang="en">
      //       <head>
      //         <meta charset="UTF-8">
      //         <title>webpack</title>
      //       </head>
      //       <body>
      //         <div id="root"></div>
      //       </body>
      //     </html>
      //   `
      // },
      templateParameters: {
        'appName': 'webpack-demo'
      },
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory']
    }),
    new WebpackParallelUglifyPlugin({
      uglifyJS: {
        output: {
          beautify: false,
          comments: false
        },
        compress: {
          // 去除 console
          drop_console: true,
          // 内嵌定义了但是只使用了一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true
        }
      }
    }),
    new webpack.DllReferencePlugins({
      manifest: require('../lib/react-manifest.json'),
    })
  ]
}