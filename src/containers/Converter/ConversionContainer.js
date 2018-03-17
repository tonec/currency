import React, { PropTypes, Component } from 'react'
import { RefreshControl, ScrollView, Text, View, Platform } from 'react-native'
import { connect } from 'react-redux'

import ProgressBar from '../../components/ProgressBar/ProgressBar'
import styles from './styles'
import { iconsMap } from '../../utils/AppIcons'

class ConversionContainer extends Component {

  static propTypes = {
    navigator: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      isRefreshing: false
    }

    this._onRefresh = this._onRefresh.bind(this)
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this))
  }

  _onRefresh () {
    this.setState({ isRefreshing: true })
  }

  _onNavigatorEvent (event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'search') {
        let rightButtons = []
        if (Platform.OS === 'ios') {
          rightButtons = [
            {
              id: 'close',
              title: 'Close',
              icon: iconsMap['ios-close']
            }
          ]
        }
        this.props.navigator.showModal({
          screen: 'currency.Search',
          title: 'Search',
          navigatorButtons: {
            rightButtons
          }
        })
      }
    }
  }

  render () {
    if (this.state.isLoading) {
      return <View style={styles.progressBar}><ProgressBar /></View>
    }

    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            colors={['#EA0000']}
            tintColor="white"
            title="loading..."
            titleColor="white"
            progressBackgroundColor="white"
          />
        }
      >
        <View>
          <View style={styles.listHeading}>
            <Text style={styles.listHeadingLeft}>Convert</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(ConversionContainer)
