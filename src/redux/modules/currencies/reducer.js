import * as types from './actions'

export const initialState = {
  fetching: false
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {

    case types.FETCH:
      return { ...state, fetching: true }

    case types.FETCH_SUCCESS:
      return { ...state, fetching: false }

    case types.FETCH_FAIL:
      return { ...state, fetching: false }

    default:
      return state
  }
}
