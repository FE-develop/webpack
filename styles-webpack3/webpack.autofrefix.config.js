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
