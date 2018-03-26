import React, { PropTypes, Component } from 'react'
import { ScrollView, View, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { iconsMap } from '../../utils/icons'
import { ProgressBar } from '../../components'

import styles from './styles'

const navigatorStyle = {
  navBarBackgroundColor: '#617bad',
  navBarTranslucent: false,
  drawUnderNavBar: false,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: true
}

class Layout extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  }

  constructor (props) {
    super(props)

    this.refConColors = {
      colors: ['#ea0000'],
      tintColor: '#fff',
      titleColor: '#fff',
      progressBackgroundColor: '#fff'
    }

    this.state = {
      isLoading: false,
      isRefreshing: false,
      currencies: [
        { name: 'USD' },
        { name: 'GBP' }
      ]
    }

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
  }

  onNavigatorEvent = (event) => {
    const { navigator } = this.props

    if (event.type === 'NavBarButtonPress' && event.id === 'add') {
      navigator.showModal({
        screen: 'currency.Currencies',
        title: 'Choose currencies',
        navigatorStyle,
        navigatorButtons: {
          rightButtons: [{
            id: 'close',
            title: 'Close',
            icon: iconsMap['ios-close']
          }]
        }
      })
    }

    if (event.type === 'NavBarButtonPress' && event.id === 'close') {
      navigator.dismissModal()
    }
  }

  render () {
    const { isLoading } = this.state

    if (isLoading) {
      return <View style={styles.progressBar}><ProgressBar /></View>
    }

    return (
      <LinearGradient colors={['#91a4ca', '#91a4ca', '#8697BA']} style={styles.linearGradient}>
        <View style={styles.wrapSearch}>
          <TextInput
            style={styles.input}
            placeholder="Filter currencies"
            onFocus={this.handleOnInputFocus}
            onChangeText={this.handleOnInputChange}
            onBlur={this.handleOnInputBlur}
          />
          <Icon
            style={styles.icon}
            size={30}
            name="ios-search"
          />
        </View>
        <ScrollView style={styles.container}>
          {this.props.children}
        </ScrollView>
      </LinearGradient>
    )
  }
}

export default Layout
