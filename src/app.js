import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { Navigation } from 'react-native-navigation'
import configureStore from './redux/configureStore'
import { registerAuthScreens, registerMainScreens } from './screens'
import { iconsLoaded } from './utils/icons'
import { Navigation as MainNav } from './components'

const store = configureStore()

export const init = async () => {
  
  await iconsLoaded

  const token = await AsyncStorage.getItem('authToken')
  // const token = await AsyncStorage.removeItem(authToken)

  if (!token) {
    startAuth()
  } else {
    startMain()
  }
}

const startAuth = () => {
  persistStore(store, null, () => {
    registerAuthScreens(store, Provider)
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'viatorem.Login',
        title: 'Log In'
      }
    })
  })
}

const startMain = () => {
  persistStore(store, null, () => {
    registerMainScreens(store, Provider)
    MainNav()
  })
}

