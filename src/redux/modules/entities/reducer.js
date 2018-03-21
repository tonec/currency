import merge from 'lodash/merge'

export const initialState = {}

export default function reducer (state = initialState, action = {}) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
