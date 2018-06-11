import * as types from './actions'

export const initialState = {
  isRequesting: false,
  user: {}
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {

    case types.LOGIN:
      return { ...state, isRequesting: true }

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        user: action.response
      }

    case types.LOGIN_FAIL:
      return { ...state, isRequesting: false }

    default:
      return state
  }
}
