import React, { PropTypes, Component } from 'react'
import { RefreshControl, ScrollView, View, Platform } from 'react-native'
import { iconsMap } from '../../utils/icons'
import { ProgressBar } from '../../components'

import styles from './styles'

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
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'add') {
        let rightButtons = []

        if (Platform.OS === 'ios') {
          rightButtons = [{
            id: 'close',
            title: 'Close',
            icon: iconsMap['ios-close']
          }]
        }

        this.props.navigator.showModal({
          screen: 'currency.Currencies',
          title: 'Choose currencies',
          navigatorButtons: {
            rightButtons
          }
        })
      }
    }
  }

  render () {
    const { isLoading, isRefreshing } = this.state

    if (isLoading) {
      return <View style={styles.progressBar}><ProgressBar /></View>
    }

    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            {...this.refConColors}
            title="loading..."
            refreshing={isRefreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        {this.props.children}
      </ScrollView>
    )
  }
}

export default Layout
