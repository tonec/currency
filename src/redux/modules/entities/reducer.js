import merge from 'lodash/merge'

export const initialState = {}

export default function reducer (state = initialState, action = {}) {
  console.log('action response', action.response)
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
