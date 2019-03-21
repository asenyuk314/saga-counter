import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import pageNotFounf from 'resources/images/pageNotFounf.jpg'
import { NotFoundState } from './types'
import styles from './styles.module.scss'

class NotFound extends Component <{}, NotFoundState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      imageSpinning: false
    }
  }

  render () {
    const { imageSpinning } = this.state
    return (
      <div className={styles.notFound}>
        <img
          className={classNames([styles.image],
            { [styles.imageSpinning]: imageSpinning }
          )}
          src={pageNotFounf}
          alt='Page not found'
          onClick={() => this.spinImage()}
        />
        <Link className={styles.homeButton} to='/'>
          <button>
            Home
          </button>
        </Link>
      </div>
    )
  }

  spinImage () {
    const { imageSpinning } = this.state
    if (!imageSpinning) {
      this.setState({ imageSpinning: true })
      setTimeout(() => {
        this.setState({ imageSpinning: false })
      }, 2000)
    }
  }
}

export default NotFound
