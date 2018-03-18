import { Navigation } from 'react-native-navigation'

import CurrencyListContainer from './containers/Converter/CurrencyListContainer'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('currency.Conversion', () => CurrencyListContainer, store, Provider)
}
