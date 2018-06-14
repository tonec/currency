import { createSelector } from 'reselect'
import _get from 'lodash/get'

export const getIsRequesting = state => _get(state, 'auth.isRequesting', false)
export const getUser = state => _get(state, 'auth.user', null)
