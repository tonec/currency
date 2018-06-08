import React, { PropTypes, Component } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { iconsMap } from '../../utils/icons'
import { ProgressBar } from '../../components'

import styles from './styles'

const navigatorStyle = {
  navBarBackgroundColor: '#fff',
  navBarTranslucent: true,
  drawUnderNavBar: false,
  navBarTextColor: '#8c8d99',
  navBarButtonColor: '#8c8d99',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: false
}

class Layout extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    filterText: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired
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
      <View style={styles.container}>
        <View style={styles.wrapSearch}>
          <View style={styles.wrapSearchInner}>
            <TextInput
              style={styles.input}
              value={this.props.filterText}
              placeholder="Filter currencies"
              onFocus={this.handleOnInputFocus}
              onChangeText={this.props.onSearchChange}
              onBlur={this.handleOnInputBlur}
            />
            <Icon
              style={styles.icon}
              size={30}
              name="ios-search"
            />
          </View>
        </View>
        <View style={styles.container}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

export default Layout
