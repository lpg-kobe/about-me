const path = require('path')
module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
      exclude: [
        path.resolve(__dirname, '/node_modules/'),
        path.resolve(__dirname, '/public/js/plugin/')
      ]
    }]
  }
}