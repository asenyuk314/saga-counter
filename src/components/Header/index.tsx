import React, { Component } from 'react'

import reduxSaga from 'resources/images/reduxSaga.svg'
import styles from './styles.module.scss'

class Header extends Component {
  render () {
    return (
      <div className={styles.header}>
        <img className={styles.logo} src={reduxSaga} />
        Saga Counter
      </div>
    )
  }
}

export default Header
