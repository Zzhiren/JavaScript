# 问题：Module build failed babel-loader Unexpected token, expected ","
```js
// 安装 npm install --save-dev @babel/preset-typescript
// 添加webpack配置
{
  test: /\.ts$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/typescript']
    }
  },
}
```