import { put, call } from 'redux-saga/effects'

import { delay } from 'helpers'
import { DECREASE } from 'store/counter/consts'

const generator = function * decrease () {
  try {
    yield call(delay)
    yield put({ type: DECREASE })
  } catch(e) {
    console.error(e)
  }
}

export default generator
