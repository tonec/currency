import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import configureStore from './redux/configureStore'
import { registerScreens } from './screens'
import { Navigation } from './components'
import { iconsLoaded } from './utils/icons'

const store = configureStore()

export const init = () => {
  
  iconsLoaded.then(() => {
    startMainApp()
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

const startMainApp = () => {
  persistStore(store, null, () => {
    registerScreens(store, Provider)
    Navigation()
  })
}

