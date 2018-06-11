import React from 'react'
import { node } from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const Single = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

Single.propTypes = {
  children: node.isRequired
}

export default Single
