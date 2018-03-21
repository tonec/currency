import merge from 'lodash/merge'
import * as types from './actions'

export const initialState = {
  fetching: false
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {

    case types.FETCH:
      return merge({}, state, { fetching: true })

    case types.FETCH_SUCCESS:
      return merge(
        {},
        state,
        { fetching: false },
        { visible: action.response.result }
      )

    case types.FETCH_FAIL:
      return merge({}, state, { fetching: false })

    default:
      return state
  }
}
