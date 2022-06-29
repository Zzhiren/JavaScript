const path = require('path')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const CommonConfig = require('./webpack.common.config')
const distPath = '../dist/webpack4'

module.exports = merge(CommonConfig, {
  mode: 'production',
  // mode: 'development',
  entry: {
    index: './src/main.js'
  },
  output: {
    filename: '[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, distPath)
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: `images/`,
            limit: 1024 * 90 // 小于90kb的打包成 base64
          }
        }
      },

      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  }
})