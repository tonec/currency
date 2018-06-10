import React from 'react'
import { string, func } from 'prop-types'
import { View, TextInput } from 'react-native'
import styles from './styles'

const Input = ({ value, handleOnChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        onChangeText={handleOnChange}
      />
    </View>
  )
}

Input.propTypes = {
  value: string,
  handleOnChange: func.isRequired
}

Input.defaultProps = {
  value: ''
}

export default Input
