const path = require('path')
const { merge } = require('webpack-merge')

const CommonConfig = require('./webpack.common.config')
const distPath = '../dist/webpack5'

module.exports = merge(CommonConfig, {
  mode: 'production',
  // mode: 'development',
  entry: {
    index: './src/index.js',
    main: './src/main.js'
  },
  output: {
    filename: '[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, distPath),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 90 // 90kb
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
  },
})