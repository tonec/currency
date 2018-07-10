import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as flags from '../../components/Flags/Flags'
import styles from './styles'

class CurrencyListItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onCurrencyListChange: PropTypes.func.isRequired
  }

  handleOnPress = event => {
    const { id, onCurrencyListChange } = this.props
    onCurrencyListChange(id)
  }

  render () {
    const { name, countryCode, isSelected } = this.props

    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this.handleOnPress}
        >
          <View style={styles.wrapFlag}>
            <Image
              style={styles.flag}
              width={30}
              height={30}
              resizeMode={'cover'}
              source={flags[countryCode.toLowerCase()]}
            />
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View style={styles.wrapIcon}>
            <Icon
              style={styles.icon}
              size={30}
              name={isSelected ? 'md-checkbox-outline' : 'md-square-outline'}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CurrencyListItem
