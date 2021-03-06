/*
* Actions
* * * * */

const prefix = '@auth'

export const LOGIN = `${prefix}/LOGIN`
export const LOGIN_SUCCESS = `${prefix}/LOGIN_SUCCESS`
export const LOGIN_FAIL = `${prefix}/LOGIN_FAIL`

export const CLEAR_USER = `${prefix}/CLEAR_USER`

/*
* Action creators
* * * * * * * * */

export const login = credentials => {
  const { email, password } = credentials

  return {
    types: [ LOGIN, LOGIN_SUCCESS, LOGIN_FAIL ],
    promise: async ({ firebase }) => {
      try {
        const { _user } = await firebase.auth().signInWithEmailAndPassword(email, password)
        return _user
      } catch (error) {
        return error
      }
    }
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}