# webpack3 vendor配置

实例化一个`webpack.optimize.CommonsChunkPlugin`对象

```javascript
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['lodash']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ]
}
```