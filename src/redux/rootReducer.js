import { combineReducers } from 'redux'
import entities from './modules/entities/reducer'
import rates from './modules/rates/reducer'

export default combineReducers({
  entities,
  rates
})
