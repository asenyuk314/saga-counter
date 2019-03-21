import { all, takeEvery } from 'redux-saga/effects'

import { INCREASE_ASYNC, DECREASE_ASYNC } from 'store/counter/consts'
import increaseAsync from './every/increaseAsync'
import decreaseAsync from './every/decreaseAsync'

function * counterSaga () {
  yield all([
    yield takeEvery(INCREASE_ASYNC, increaseAsync),
    yield takeEvery(DECREASE_ASYNC, decreaseAsync)
  ])
}

export default counterSaga
