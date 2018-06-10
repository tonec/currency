import React from 'react'
import { string, func } from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './styles'

const ButtonElement = ({ value, handleOnPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOnPress}
      >
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    </View>
  )
}

ButtonElement.propTypes = {
  value: string.isRequired,
  handleOnPress: func.isRequired
}

ButtonElement.defaultProps = {

}

export default ButtonElement
