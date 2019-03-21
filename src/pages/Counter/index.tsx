import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { CounterProps } from './types'
import StateType from 'store/stateType'
import * as actions from 'store/counter/actions'
import styles from './styles.module.scss'

class Counter extends Component <CounterProps> {
  render () {
    const { number, increaseAsync, decreaseAsync, increase, decrease } = this.props
    return (
      <div className={styles.counter}>
        <div className={classNames(
          [styles.number],
          { [styles.numberGreen]: number > 0,
            [styles.numberRed]: number < 0 }
          )}>
          {number}
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonsWrapper}>
            <button
              className={styles.button}
              onClick={() => increaseAsync()}>
              Increase async
            </button>
            <button
              className={styles.button}
              onClick={() => decreaseAsync()}>
              Decrease async
            </button>
          </div>
          <div className={styles.buttonsWrapper}>
            <button
              className={styles.button}
              onClick={() => increase()}>
              Increase
            </button>
            <button
              className={styles.button}
              onClick={() => decrease()}>
              Decrease
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  number: state.counter.number
})

const mapDispatchToProps = {
  increaseAsync: actions.increaseAsync,
  decreaseAsync: actions.decreaseAsync,
  increase: actions.increase,
  decrease: actions.decrease
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
