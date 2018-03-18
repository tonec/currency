import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './styles'

const propTypes = {
  name: PropTypes.string.isRequired
}

const CurrencyListItem = ({ name }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>
        {name}
      </Text>
    </View>
  )
}

CurrencyListItem.propTypes = propTypes

export default CurrencyListItem
