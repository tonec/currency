import { Navigation } from 'react-native-navigation'

import Drawer from './components/Drawer/Drawer'
import ConversionContainer from './containers/Converter/ConversionContainer'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('currency.Drawer', () => Drawer)
  Navigation.registerComponent('currency.Conversion', () => ConversionContainer, store, Provider)
}
