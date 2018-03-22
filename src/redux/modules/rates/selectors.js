import { createSelector } from 'reselect'
import _get from 'lodash/get'

export const getRates = state => {
  return _get(state, 'rates.visible') && state.rates.visible.map(id => state.entities.rates[id])
}

export const getSelected = state => {
  return _get(state, 'rates.selected') && state.rates.selected
}

export const getSelectedRates = createSelector(
  [ getRates, getSelected ],
  (rates, selected) => rates && rates.filter(item => selected.includes(item.id))
)
