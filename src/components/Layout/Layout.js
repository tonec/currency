import React, { PropTypes, Component } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
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
    const { navigator } = this.props

    if (event.type === 'NavBarButtonPress' && event.id === 'add') {
      navigator.showModal({
        screen: 'currency.Currencies',
        title: 'Choose currencies',
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
