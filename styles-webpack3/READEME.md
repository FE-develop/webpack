# extract-text-webpack-plugin

```javascript
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src'),
  module: {
    rules: [{
      test: /\.css$/,
      include: [path.join(__dirname, 'src')],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader']
      })
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
```

它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。webpack4中需要将此模块升级为`extract-text-webpack-plugin@next`

`postcss.config.js`是配合`postcss-loader`的一个配置文件，优化CSS文件输出