import React from 'react'
import { string, func } from 'prop-types'
import { View, TextInput } from 'react-native'
import styles from './styles'

const Input = ({ value, placeholder, handleOnChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleOnChange}
      />
    </View>
  )
}

Input.propTypes = {
  value: string,
  placeholder: string,
  handleOnChange: func.isRequired
}

Input.defaultProps = {
  value: '',
  placeholder: ''
}

export default Input
