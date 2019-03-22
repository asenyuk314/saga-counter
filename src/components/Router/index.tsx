import React, { Component } from 'react'
import { BrowserRouter as Royter, Route, Switch } from 'react-router-dom'

import Counter from 'pages/Counter'
import NotFound from 'pages/NotFound'

class Router extends Component {
  render () {
    return (
      <Royter>
        <Switch>
          <Route exact path='/' component={Counter} />
          <Route component={NotFound} />
        </Switch>
      </Royter>
    )
  }
}

export default Router
