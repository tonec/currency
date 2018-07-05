import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { Navigation } from 'react-native-navigation'
import firebase from 'react-native-firebase'
import _get from 'lodash/get'
import configureStore from './redux/configureStore'
import { registerAuthScreens, registerMainScreens } from './screens'
import { iconsLoaded } from './utils/icons'
import { Navigation as MainNav } from './components'

const store = configureStore(firebase)

export const init = async () => {
  await iconsLoaded

  persistStore(store, null, () => {
    const userId = _get(store.getState(), 'auth.user.uid', null)

    if (!userId) {
      startAuth()
    } else {
      startMain()
    }
  })
}

export const startAuth = () => {
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

export const startMain = () => {
  registerMainScreens(store, Provider)
  MainNav()
}

