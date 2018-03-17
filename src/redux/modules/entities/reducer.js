export const initialState = {}

export default function reducer (state = initialState, action = {}) {
  if (action.response && action.response.entities) {
    return state.merge(action.response.entities)
  }

  return state
}
