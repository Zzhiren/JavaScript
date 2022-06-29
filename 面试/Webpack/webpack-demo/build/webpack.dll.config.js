const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    // 把 React 相关模块放到一个单独的动态链接库
    react: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'dll.[name].js',
    library: '_dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../lib', '[name]-manifest.json'),
      name: '_dll_[name]'
    })
  ]
};