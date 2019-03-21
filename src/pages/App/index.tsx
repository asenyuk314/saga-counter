import React, { Component } from 'react'

import Header from 'components/Header'
import Router from 'components/Router'
import styles from './styles.module.scss'

class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.page}>
          <Router />
        </div>
      </div>
    )
  }
}

export default App
