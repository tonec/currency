import { createSelector } from 'reselect'
import _get from 'lodash/get'
import _sortBy from 'lodash/sortBy'

export const getRates = state => {
  const result = _get(state, 'rates.visibleRates') && state.rates.visibleRates.map(id => state.entities.rates[id])
  return _sortBy(result, o => o.name)
}

export const getFilterText = state => {
  return state.rates.filterText
}

export const getSelected = state => {
  return _get(state, 'rates.selected') && state.rates.selected
}

export const getRatesFiltered = createSelector(
  [ getRates, getFilterText ],
  (rates, filterText) => {
    return rates
      .filter(rate => rate.name.includes(filterText))
      .reduce((acc, rate) => {
        const firstLetter = rate.name.charAt(0)

        if (acc[firstLetter]) {
          acc[firstLetter].push(rate)
        } else {
          acc[firstLetter] = [ rate ]
        }

        return acc
      }, {})
  }
)

export const getSelectedRates = createSelector(
  [ getRates, getSelected ],
  (rates, selected) => {
    const result = rates && rates.filter(item => selected.includes(item.id))
    return _sortBy(result, o => o.name)
  }
)
