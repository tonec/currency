/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import clientMiddleware from './middleware/clientMiddleware'
import rootReducer from './rootReducer'

let middleware = [clientMiddleware]

if (__DEV__) {
  const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default()
  middleware = [...middleware, reduxImmutableStateInvariant, logger]
} else {
  middleware = [...middleware]
}

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
}
