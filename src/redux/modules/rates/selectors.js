import { createSelector } from 'reselect'
import _get from 'lodash/get'
import _sortBy from 'lodash/sortBy'

export const getRates = state => {
  const result = _get(state, 'rates.visible') && state.rates.visible.map(id => state.entities.rates[id])
  return _sortBy(result, o => o.name)
}

export const getSelected = state => {
  return _get(state, 'rates.selected') && state.rates.selected
}

export const getSelectedRates = createSelector(
  [ getRates, getSelected ],
  (rates, selected) => {
    const result = rates && rates.filter(item => selected.includes(item.id))
    return _sortBy(result, o => o.name)
  }
)
