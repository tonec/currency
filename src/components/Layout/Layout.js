import React, { PropTypes, Component } from 'react'
import { ScrollView, View } from 'react-native'
import { iconsMap } from '../../utils/icons'
import { ProgressBar } from '../../components'
import { colors } from '../../assets/styles/variables'
import styles from './styles'

const navigatorStyle = {
  navBarBackgroundColor: colors.brandWhite,
  navBarButtonColor: colors.brandPrimary
}

class Layout extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      isLoading: false
    }

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = (event) => {
    const { navigator } = this.props

    if (event.type === 'NavBarButtonPress' && event.id === 'add') {
      navigator.showModal({
        screen: 'viatorem.Currencies',
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
      <ScrollView style={styles.container}>
        {this.props.children}
      </ScrollView>
    )
  }
}

export default Layout
