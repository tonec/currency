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
    const { name } = this.props
    const { tempValue } = this.state

    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{name}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={tempValue}
          onFocus={this.handleOnInputFocus}
          onChangeText={this.handleOnInputChange}
          onBlur={this.handleOnInputBlur}
        />
      </View>
    )
  }
}

export default ConverterListItem
