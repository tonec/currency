import React from 'react'
import { string, func } from 'prop-types'
import { View, TextInput } from 'react-native'
import styles from './styles'

const Input = ({ name, value, placeholder, handleOnChange, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleOnChange.bind(this, name)}
        {...props}
      />
    </View>
  )
}

Input.propTypes = {
  name: string.isRequired,
  value: string,
  placeholder: string,
  handleOnChange: func.isRequired
}

Input.defaultProps = {
  value: '',
  placeholder: ''
}

export default Input
