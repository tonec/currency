/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import apiClient from '../utils/apiClient'
import clientMiddleware from './middleware/clientMiddleware'
import rootReducer from './rootReducer'

let middleware = [clientMiddleware({ client: apiClient() })]

const config = {
  key: 'root',
  storage,
}

const reducer = persistCombineReducers(config, rootReducer)

if (__DEV__) {
  const logger = require('redux-logger').createLogger()
  const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default()
  middleware = [ ...middleware, reduxImmutableStateInvariant, logger.__esModule ? logger.default : logger ]
} else {
  middleware = [ ...middleware ]
}

export default function configureStore (initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  )
}
