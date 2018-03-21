import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isNumber } from '../../utils'
import { View, Text } from 'react-native'

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
        <View><Text style={styles.listItemText}>{this.props.name}</Text></View>
      </View>
    )
  }
}

export default CurrencyListItem
