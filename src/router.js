import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './container/home'
import Blog from './container/blog'
export default (
  <Fragment>
    <Route path="/" component={Home} exact />
    <Route path="/blog" component={Blog} />
  </Fragment>
)
