const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: {
        loader: "babel-loader",
        options: {
          "presets": [
            ["env", {
              "targets": {
                "browsers": ["last 2 versions", "safari >= 7"]
              }
            }]
          ]
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  }
}