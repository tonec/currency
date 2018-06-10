import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { Navigation } from 'react-native-navigation'
import configureStore from './redux/configureStore'
import { registerScreens } from './screens'
import { Navigation as MainNav } from './components'
import { iconsLoaded } from './utils/icons'
import LoginContainer from './containers/Auth/Login/LoginContainer'

const store = configureStore()

export const init = () => {
  
  iconsLoaded.then(() => {
    startAuth()
  })

  // const token = await AsyncStorage.getItem('authToken')
  // const token = await AsyncStorage.removeItem(authToken)

  // if (!token) {
  //   // startLogin();
  //   startMainApp();
  // } else {
  //   startMainApp();
  // }
}

const startAuth = () => {
  Navigation.registerComponent('viatorem.Login', () => LoginContainer);
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'viatorem.Login',
      title: 'Log In'
    }
  })
}

const startMain = () => {
  persistStore(store, null, () => {
    registerScreens(store, Provider)
    MainNav()
  })
}

