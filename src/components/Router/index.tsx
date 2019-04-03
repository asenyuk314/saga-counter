import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Counter from 'pages/Counter'
import NotFound from 'pages/NotFound'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Counter} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
