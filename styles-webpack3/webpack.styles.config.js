const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './',
  module: {
    rules: [{
      test: /\.css$/,
      include: [path.join(__dirname, 'src')],
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.[hash].js'
  }
}
