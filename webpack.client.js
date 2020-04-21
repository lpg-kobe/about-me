const path = require('path')
const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
module.exports = merge(baseConfig, {
  entry: './src/client/index.js',
  output: {
    path: path.resolve('public/js'),
    filename: 'client.js'
  }
})