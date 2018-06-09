import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import configureStore from './redux/configureStore'
import { registerScreens } from './screens'
import { Navigation } from './components'
import { iconsLoaded } from './utils/icons'

const store = configureStore()

const App = () => {
  
  iconsLoaded.then(() => {
    startApp()
  })

  const startApp = () => {
    persistStore(store, null, () => {
      registerScreens(store, Provider)
      Navigation()
    })
  }
}

export default App
