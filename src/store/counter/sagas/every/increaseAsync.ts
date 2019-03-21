import { put, call } from 'redux-saga/effects'

import { delay } from 'helpers'
import { INCREASE } from 'store/counter/consts'

const generator = function * increase () {
  try {
    yield call(delay)
    yield put({ type: INCREASE })
  } catch(e) {
    console.error(e)
  }
}

export default generator
