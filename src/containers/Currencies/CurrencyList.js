import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'
import CurrencyListItem from './CurrencyListItem'

import styles from './styles'

class CurrencyList extends Component {

  static propTypes = {
    rates: PropTypes.array,
    selected: PropTypes.array,
    onCurrencyListChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    rates: [],
    selected: []
  }

  isSelected = (id) => this.props.selected.includes(id)

  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => (
    <CurrencyListItem
      id={item.id}
      name={item.name}
      isSelected={this.isSelected(item.id)}
      onPressItem={this._onPressItem}
      onCurrencyListChange={this.props.onCurrencyListChange}
    />
  )

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={this.props.rates}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}

export default CurrencyList
