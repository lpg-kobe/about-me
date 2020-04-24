import React from 'react'
import { StaticRouter } from 'react-router-dom'
import routes from '../router.js'
const { renderToString } = require('react-dom/server')
const renderHome = (req, res) => {
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
}
const renderBlog = (req, res) => {
  const routeDom = renderToString(<StaticRouter location={req.path}>
    {routes}
  </StaticRouter>)
  res.send(`
  <html lang="zh-CN">
    <head>
      <meta name="generator" content="Hexo 3.9.0">
      <meta charset="utf-8">
      <meta name="keywords" content="blog of pika">
      <meta name="description" content="blog of pika">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
      <meta name="renderer" content="webkit|ie-stand|ie-comp">
      <meta name="mobile-web-app-capable" content="yes">
      <meta name="format-detection" content="telephone=no">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <title>My Blog</title>
      <link rel="icon" type="image/png" href="/favicon.png">
      <link rel="stylesheet" type="text/css" href="/css/all.css">
      <link rel="stylesheet" type="text/css" href="/css/materialize.min.css">
      <link rel="stylesheet" type="text/css" href="/css/aos.css">
      <link rel="stylesheet" type="text/css" href="/css/animate.min.css">
      <link rel="stylesheet" type="text/css" href="/css/lightgallery.min.css">
      <link rel="stylesheet" type="text/css" href="/css/matery.css">
      <link rel="stylesheet" type="text/css" href="/css/my.css">
      <link rel="stylesheet" href="/css/prism-tomorrow.css" type="text/css">
    </head>
    <body>
      <div id="root">${routeDom}</div>
      <script src="js/client.js"></script>
      <script src="js/plugin/jquery.min.js"></script>
    </body>
    `)
}
export {
  renderHome, renderBlog
}