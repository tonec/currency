import { Navigation } from 'react-native-navigation'
import { iconsMap } from '../../utils/icons'
import { colors } from '../../assets/styles/variables'

const navigatorStyle = {
  navBarBackgroundColor: colors.brandWhite,
  navBarButtonColor: colors.brandPrimary
}

export default () => {
  return Navigation.startTabBasedApp({
    tabs: [{
      label: 'Trips',
      title: 'Trips',
      icon: iconsMap['md-globe'],
      screen: 'viatorem.Conversion',
      navigatorStyle
    }, {
      label: 'Documents',
      title: 'Documents',
      icon: iconsMap['md-document'],
      screen: 'viatorem.Conversion',
      navigatorStyle
    }, {
      label: 'Currency',
      title: 'Currency',
      icon: iconsMap['logo-usd'],
      screen: 'viatorem.Conversion',
      navigatorStyle,
      navigatorButtons: {
        rightButtons: [
          {
            id: 'add',
            title: 'Add',
            icon: iconsMap['ios-add']
          }
        ],
        leftButtons: [
          {
            id: 'logout',
            title: 'Log out',
            icon: iconsMap['ios-close']
          }
        ]
      }
    }, {
      label: 'Profile',
      title: 'Profile',
      icon: iconsMap['md-person'],
      screen: 'viatorem.Conversion',
      navigatorStyle
    }],
    tabsStyle: {
      tabBarButtonColor: colors.greyMid,
      tabBarSelectedButtonColor: colors.greyMid,
      tabBarBackgroundColor: colors.greyLight
    }
  })
}
