import { Navigation } from 'react-native-navigation'

import LoginContainer from './containers/Auth/Login/LoginContainer'
import RegisterContainer from './containers/Auth/Register/RegisterContainer'

import ConverterListContainer from './containers/Converter/ConverterListContainer'
import CurrencyListContainer from './containers/Currencies/CurrencyListContainer'

export const registerAuthScreens = (store, Provider) => {
  Navigation.registerComponent('viatorem.Login', () => LoginContainer, store, Provider)
  Navigation.registerComponent('viatorem.Register', () => RegisterContainer, store, Provider)
}

export const registerMainScreens = (store, Provider) => {
  Navigation.registerComponent('viatorem.Conversion', () => ConverterListContainer, store, Provider)
  Navigation.registerComponent('viatorem.Currencies', () => CurrencyListContainer, store, Provider)
}
