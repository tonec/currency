import { Navigation } from 'react-native-navigation'

import ConverterListContainer from './containers/Converter/ConverterListContainer'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('currency.Conversion', () => ConverterListContainer, store, Provider)
}
