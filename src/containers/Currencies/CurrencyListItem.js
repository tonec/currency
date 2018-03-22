import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import { isNumber } from '../../utils'

import styles from './styles'

class CurrencyListItem extends Component {

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
        <TouchableOpacity>
          <Text style={styles.listItemText}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CurrencyListItem
