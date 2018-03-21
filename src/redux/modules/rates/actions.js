import { normalize } from 'normalizr'
import { ratesListSchema } from './schema'

/*
* Actions
* * * * */

const prefix = '@rates'

export const FETCH = `${prefix}/FETCH`
export const FETCH_SUCCESS = `${prefix}/FETCH_SUCCESS`
export const FETCH_FAIL = `${prefix}/FETCH_FAIL`

/*
* Action creators
* * * * * * * * */

export const fetchRates = () => {
  return {
    types: [ FETCH, FETCH_SUCCESS, FETCH_FAIL ],
    promise: async ({ client }) => {
      try {
        const { data } = await client.get('/rates')
        return normalize(data.rates, ratesListSchema)
      } catch (error) {
        throw error
      }
    }
  }
}
