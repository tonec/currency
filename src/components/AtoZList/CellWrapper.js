import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactNative, { View } from 'react-native'

export default class CellWrapper extends Component {

  static propTypes = {
    sectionId: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    component: PropTypes.func.isRequired,
    updateTag: PropTypes.func
  }

  componentDidMount () {
    this.props.updateTag && this.props.updateTag(ReactNative.findNodeHandle(this.refs.view), this.props.sectionId)
  }

  render () {
    const Cell = this.props.component
    return (
      <View ref="view">
        <Cell {...this.props} />
      </View>
    )
  }
}
