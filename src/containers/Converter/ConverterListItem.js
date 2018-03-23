import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isNumber } from '../../utils'
import { View, Text, TextInput } from 'react-native'

import styles from './styles'

class ConverterListItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    handleOnValueInputChange: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      tempValue: this.props.value
    }
  }

  handleOnInputChange = volume => {
    const { id, rate, handleOnValueInputChange } = this.props

    if (isNumber(volume)) {
      handleOnValueInputChange(id, rate, parseFloat(volume))
    }
  }

  render () {
    const { name, value } = this.props

    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{name}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={value.toString()}
          onFocus={this.handleOnInputFocus}
          onChangeText={this.handleOnInputChange}
        />
      </View>
    )
  }
}

export default ConverterListItem
