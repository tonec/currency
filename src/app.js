import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { Navigation } from 'react-native-navigation'
import firebase from 'react-native-firebase'
import configureStore from './redux/configureStore'
import { registerAuthScreens, registerMainScreens } from './screens'
import { iconsLoaded } from './utils/icons'
import { Navigation as MainNav } from './components'

const store = configureStore(firebase)

export const init = async () => {
  await iconsLoaded

  persistStore(store, null, () => {

    const token = false
    // const token = await AsyncStorage.removeItem(authToken)

    if (!token) {
      startAuth()
    } else {
      startMain()
    }
  })
}

const startAuth = () => {
  registerAuthScreens(store, Provider)
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'viatorem.Login',
      title: '',
      navigatorStyle: {
        navBarNoBorder: true
      }
    }
  })
}

const startMain = () => {
  registerMainScreens(store, Provider)
  MainNav()
}

