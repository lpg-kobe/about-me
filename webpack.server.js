const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
const path = require('path')
const nodeExternal = require('webpack-node-externals')
module.exports = merge(baseConfig, {
  target: 'node',
  // 排除node内置模块
  externals: [nodeExternal()],
  entry: './src/server/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js'
  }
})