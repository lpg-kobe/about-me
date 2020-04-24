const express = require('express')
const app = express()
const path = require('path')
const { renderToString } = require('react-dom/server')
import React from 'react'
import { renderHome, renderBlog } from './render.js'
app.use(express.static(path.resolve('public')))
app.get('/', (req, res) => {
  renderHome(req, res)
})
app.get('/blog', (req, res) => {
  renderBlog(req, res)
})
app.listen(8024)