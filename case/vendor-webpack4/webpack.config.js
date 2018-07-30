const path = require('path');

// 基于webpack4的配置
// https://zxc0328.github.io/2018/06/19/webpack-4-config-best-practices/

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: './',
    vendor: ['jquery', 'lodash'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [],
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