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
  navBarBackgroundColor: '#fff',
  navBarTranslucent: true,
  drawUnderNavBar: false,
  navBarTextColor: '#8c8d99',
  navBarButtonColor: '#8c8d99',
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
            label: 'Trips',
            screen: 'currency.Conversion',
            icon: iconsMap['md-globe'],
            selectedIcon: iconsMap['md-globe'],
            title: 'Currency',
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
          },
          {
            label: 'Documents',
            screen: 'currency.Conversion',
            icon: iconsMap['md-document'],
            selectedIcon: iconsMap['md-document'],
            title: 'Currency',
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
          },
          {
            label: 'Currency',
            screen: 'currency.Conversion',
            icon: iconsMap['logo-usd'],
            selectedIcon: iconsMap['logo-usd'],
            title: 'Currency',
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
          },
          {
            label: 'Profile',
            screen: 'currency.Conversion',
            icon: iconsMap['md-person'],
            selectedIcon: iconsMap['md-person'],
            title: 'Currency',
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
          tabBarButtonColor: '#8c8d99',
          tabBarSelectedButtonColor: '#8c8d99',
          tabBarBackgroundColor: '#f5f5f5'
        }
      })
    })
  }
}

export default App
