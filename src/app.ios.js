/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { registerScreens } from './screens'

import { iconsMap, iconsLoaded } from './utils/icons'
import configureStore from './redux/configureStore'

const store = configureStore()

const navigatorStyle = {
  navBarBackgroundColor: '#0a0a0a',
  navBarTranslucent: true,
  drawUnderNavBar: true,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: true
}

class App extends Component {
  constructor (props) {
    super(props)
    iconsLoaded.then(() => {
      this.startApp()
    })
  }

  startApp () {
    persistStore(store, null, () => {
      registerScreens(store, Provider)

      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Convert',
            screen: 'currency.Conversion',
            icon: iconsMap['ios-film-outline'],
            selectedIcon: iconsMap['ios-film'],
            title: 'Converter',
            navigatorStyle,
            navigatorButtons: {
              rightButtons: [
                {
                  title: 'Add',
                  id: 'add',
                  icon: iconsMap['ios-add']
                }
              ]
            }
          }
        ],
        tabsStyle: {
          tabBarButtonColor: 'white',
          tabBarSelectedButtonColor: 'white',
          tabBarBackgroundColor: '#0a0a0a'
        }
      })
    })
  }
}

export default App
