const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')

const CommonConfig = require('./webpack.common.config')
const distPath = '../dist/min-css-extract'
module.exports = merge(CommonConfig, {
  mode: 'development',
  entry: {
    index: './src/main.js'
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
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           'postcss-preset-env',
          //           {
          //             // 其他选项
          //           },
          //         ],
          //       ],
          //     },
          //   }
          // }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css'
    })
  ]
})