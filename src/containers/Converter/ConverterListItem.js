import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Image } from 'react-native'
import { isNumber } from '../../utils'
import * as flags from '../../components/Flags/Flags'

import styles from './styles'

class ConverterListItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currencyCode: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    handleOnValueInputChange: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      tempValue: this.props.value
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ tempValue: nextProps.value })
  }

  handleOnInputFocus = () => {
    this.setState({ tempValue: '' })
  }

  handleOnInputChange = volume => {
    const { id, rate, handleOnValueInputChange } = this.props

    if (isNumber(volume)) {
      handleOnValueInputChange(id, rate, parseFloat(volume))
    }
  }

  handleOnInputBlur = () => {
    const { value } = this.props
    const { tempValue } = this.state

    if (tempValue === '') {
      this.setState({ tempValue: value })
    }
  }

  render () {
    const { name, currencyCode, countryCode } = this.props
    const { tempValue } = this.state

    return (
      <View style={styles.listItem}>
        <View style={styles.currencyTitle}>
          <Text style={styles.listItemText}>{name}</Text>
        </View>
        <View style={styles.currencyContainer}>
          <View style={styles.listItemElementFlag}>
            <Image
              style={styles.flag}
              width={40}
              height={40}
              resizeMode={'contain'}
              source={flags[countryCode.toLowerCase()]}
            />
          </View>
          <View style={styles.listItemElementInput}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={tempValue}
              onFocus={this.handleOnInputFocus}
              onChangeText={this.handleOnInputChange}
              onBlur={this.handleOnInputBlur}
            />
          </View>
          <View style={styles.listItemElementText}>
            <Text style={styles.listItemText}>{currencyCode}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ConverterListItem
