import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isNumber } from '../../utils'
import { View, Text, TextInput } from 'react-native'

import styles from './styles'

class ConverterListItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    handleOnValueInputChange: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      tempValue: this.props.value
    }
  }

  handleOnInputFocus = () => {
    this.setState({ tempValue: '' })
  }

  handleOnInputChange = value => {
    if (isNumber(value) || value === '') {
      this.setState({ tempValue: value })
    }
  }

  handleOnInputBlur = () => {
    const { id, value, handleOnValueInputChange } = this.props
    const { tempValue } = this.state

    if (tempValue === '') {
      this.setState({ tempValue: value })
    } else {
      handleOnValueInputChange(id, parseFloat(tempValue))
    }
  }

  render () {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{this.props.name}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={this.state.tempValue.toString()}
          onFocus={this.handleOnInputFocus}
          onChangeText={this.handleOnInputChange}
          onBlur={this.handleOnInputBlur}
        />
      </View>
    )
  }
}

export default ConverterListItem
