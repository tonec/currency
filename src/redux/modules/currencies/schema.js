import { schema } from 'normalizr'

export const rateSchema = new schema.Entity('rates')
export const ratesListSchema = new schema.Array(rateSchema)
