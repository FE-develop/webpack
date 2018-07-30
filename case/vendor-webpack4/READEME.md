# vendor

webpack4中废弃了`webpack.optimize.CommonsChunkPlugin`, 引入了 `optimization.splitChunks` 这个选项。

```javascript
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks (module) {
    return (
      module.resource &&
      /\.js$/.test(module.resource) &&
      module.resource.indexOf(
        path.join(__dirname, '../node_modules')
      ) === 0
    )
  }
}),

new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest',
  minChunks: Infinity
}),

new webpack.optimize.CommonsChunkPlugin({
  name: 'app',
  async: 'vendor-async',
  children: true,
  minChunks: 3
}),
```

webpack4 使用 optimization.splitChunks 配置

```javascript
module.exports = {
  // ...
  optimization: {
    runtimeChunk: {name: "manifest"},
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
```