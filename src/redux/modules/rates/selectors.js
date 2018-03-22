
export const getRates = state => {
  return state.rates && state.rates.visible.map(id => state.entities.rates[id])
}
