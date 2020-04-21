const express = require('express')
const app = express()
const path = require('path')
const { renderToString } = require('react-dom/server')
import routes from '../router.js'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
app.use(express.static(path.resolve('public')))
app.get('/', (req, res) => {
  const routeDom = renderToString(<StaticRouter location={req.path}>
    {routes}
  </StaticRouter>)
  res.send(`
    <html>
      <head>
        <title>ssr render</title> 
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>About Me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content="pika"/>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link rel="stylesheet" href="css/icons.css"/>
        <link rel="stylesheet" type="text/css" href="css/responsive.css"/>
      </head>
      <body>
        <div id="root">${routeDom}</div>
        <script src="js/client.js"></script>
        <script src="js/plugin/jquery.min.js"></script>
        <script src="js/plugin/modernizr.js"></script>
        <script src="js/plugin/script.js"></script>
        <script src="js/plugin/slick.min.js"></script>
        <script src="js/plugin/bootstrap.bundle.js"></script>
        <script src="js/plugin/isotop.js"></script>
        <script src="js/plugin/poptrox.js"></script>
        <script src="js/plugin/jquery.jigowatt.js"></script>
        <script src="js/plugin/enllax.js"></script>
        <script src="js/plugin/jquery.scroller.js"></script>
        <script src="js/plugin/jQuery_nav.js"></script>
      </body>
    </html> 
  `)
})
app.listen(8024)