import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

class CurrencyListItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onCurrencyListChange: PropTypes.func.isRequired
  }

  handleOnPress = event => {
    const { id, onCurrencyListChange } = this.props
    onCurrencyListChange(id)
  }

  render () {
    const { name, isSelected } = this.props

    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={this.handleOnPress}>
          <Icon name={isSelected ? 'md-checkbox-outline' : 'md-square-outline'} size={30} color="#fff" />
          <Text style={styles.listItemText}>{name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CurrencyListItem
