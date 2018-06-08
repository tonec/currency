import * as types from './actions'

export const initialState = {
  fetching: false,
  filterText: '',
  visibleRates: [],
  selected: []
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {

    case types.FETCH:
      return { ...state, fetching: true }

    case types.FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        visibleRates: action.response.result
      }

    case types.FETCH_FAIL:
      return { ...state, fetching: false }

    case types.UPDATE_FILTER:
      return { ...state, filterText: action.payload }

    case types.UPDATE_SELECTED:
      if (state.selected.includes(action.payload)) {
        return {
          ...state,
          selected: state.selected
            .filter(rateId => rateId !== action.payload)
        }
      }
      return {
        ...state,
        selected: state.selected
          .concat([ action.payload ])
      }

    default:
      return state
  }
}
