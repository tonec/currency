import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'
import CurrencyListItem from './CurrencyListItem'

import styles from './styles'

class CurrencyList extends Component {

  static propTypes = {
    currencies: PropTypes.array.isRequired
  }

  keyExtractor = (item, index) => item.name

  renderItem = ({ item }) => (
    <CurrencyListItem
      id={item.name}
      onPressItem={this._onPressItem}
      name={item.name}
    />
  )

  render () {
    return (
      <View>
        <View style={styles.list}>
          <FlatList
            data={this.props.currencies}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}

export default CurrencyList
