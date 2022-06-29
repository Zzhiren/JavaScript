const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    index: './src/index.js',
    sub: './src/index.js'
  },
  output: {
    // publicPath: 'http://www.zzhiren.xyz',
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  devServer: {
    open: true,
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.png/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 1024 // 小于10kb使用base64打包到js中，反之放入指定目录
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MinCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: 'vendor', // chunk名称
          priority: 1, // 权限更高，优先抽离
          test: /node_modules/,
          minSize: 0, // 大小限制
          minChunks: 1 // 最少复用几次
        },
        // 公共模块
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'sub.html',
      template: 'src/sub.html',
      chunks: ['sub']
    }),
    new MinCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    })
  ]
}