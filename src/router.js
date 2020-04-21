import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './page/home'
export default (
  <Fragment>
    <Route path="/" component={Home} exact />
  </Fragment>
)
