import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactNative, { View, Text, NativeModules } from 'react-native'
import styles from './styles'

const { UIManager } = NativeModules

export default class SectionHeader extends Component {

  static propTypes = {
    sectionId: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    component: PropTypes.func,
    updateTag: PropTypes.func,
    title: PropTypes.string
  }

  componentDidMount () {
    this.props.updateTag && this.props.updateTag(ReactNative.findNodeHandle(this.refs.view), this.props.sectionId)
  }

  render () {
    const SectionComponent = this.props.component
    const content = SectionComponent
      ? <SectionComponent {...this.props} />
      : <Text>{this.props.title}</Text>

    return (
      <View style={styles.container} ref="view">
        {content}
      </View>
    )
  }
}