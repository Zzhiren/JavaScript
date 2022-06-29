const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    index: './src/index.js',
    sub: './src/sub.js'
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
        test: /\.(scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
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
  ]
}