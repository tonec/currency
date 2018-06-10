import { Navigation } from 'react-native-navigation'

import ConverterListContainer from './containers/Converter/ConverterListContainer'
import CurrencyListContainer from './containers/Currencies/CurrencyListContainer'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('viatorem.Conversion', () => ConverterListContainer, store, Provider)
  Navigation.registerComponent('viatorem.Currencies', () => CurrencyListContainer, store, Provider)
}
