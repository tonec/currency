import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isNumber } from '../../utils'
import { View, Text, TextInput } from 'react-native'

import styles from './styles'

class ConverterListItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      value: ''
    }
  }

  handleOnInputChange = value => {
    if (isNumber(value) || value.length === '') {
      this.setState({ value })
    }
  }

  render () {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{this.props.name}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={this.state.value}
          onChangeText={this.handleOnInputChange}
        />
      </View>
    )
  }
}

export default ConverterListItem
