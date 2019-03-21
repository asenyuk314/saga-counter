import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { load, save } from 'redux-localstorage-simple'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    load({ states: ['counter'] }),
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        save({ states: ['counter'] })
      )
    )
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
