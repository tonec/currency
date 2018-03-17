import { Navigation } from 'react-native-navigation'

import ConversionContainer from './containers/Converter/ConversionContainer'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('currency.Conversion', () => ConversionContainer, store, Provider)
}
