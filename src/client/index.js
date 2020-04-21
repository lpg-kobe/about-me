import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from '../router'
const ReactDom = require('react-dom')
ReactDom.hydrate(
  <BrowserRouter>
    {routes}
  </BrowserRouter>, document.getElementById('root')
)