/*
* Actions
* * * * */

const prefix = '@auth'

export const LOGIN = `${prefix}/LOGIN`
export const LOGIN_SUCCESS = `${prefix}/LOGIN_SUCCESS`
export const LOGIN_FAIL = `${prefix}/LOGIN_FAIL`

/*
* Action creators
* * * * * * * * */

export const login = () => {
  return {
    types: [ LOGIN, LOGIN_SUCCESS, LOGIN_FAIL ],
    promise: async ({ client }) => {
      try {
        const { data } = await client.get('/rates')
        // return normalize(data.rates, ratesListSchema)
      } catch (error) {
        throw error
      }
    }
  }
}