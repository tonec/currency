/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'
import configureStore from './redux/configureStore'

const store = configureStore()

registerScreens(store, Provider)

const navigatorStyle = {
  statusBarColor: 'black',
  statusBarTextColorScheme: 'light',
  navigationBarColor: 'black',
  navBarBackgroundColor: '#0a0a0a',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'white',
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true
}

Navigation.startSingleScreenApp({
  screen: {
    screen: 'movieapp.Movies',
    title: 'Movies',
    navigatorStyle,
    leftButtons: [
      {
        id: 'sideMenu'
      }
    ]
  },
  drawer: {
    left: {
      screen: 'movieapp.Drawer'
    }
  }
})
