import { all } from 'redux-saga/effects'

import counterSaga from './counter/sagas'

function * rootSaga () {
  yield all([
    counterSaga()
  ])
}

export default rootSaga
