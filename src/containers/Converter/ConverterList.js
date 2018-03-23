import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'
import ConverterListItem from './ConverterListItem'

import styles from './styles'

class ConverterList extends Component {

  static propTypes = {
    baseId: PropTypes.string,
    baseRate: PropTypes.number.isRequired,
    baseVolume: PropTypes.number.isRequired,
    currencies: PropTypes.array.isRequired,
    handleOnValueInputChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    baseId: null
  }

  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => {
    const { baseId, baseRate, baseVolume, handleOnValueInputChange } = this.props

    const crossRate = item.rate / baseRate

    console.log('check', item.id === baseId)
    console.log('baseVolume', baseVolume)

    return (
      <ConverterListItem
        id={item.id}
        name={item.name}
        rate={item.rate}
        value={(item.id === baseId) ? baseVolume : crossRate * baseVolume}
        onPressItem={this._onPressItem}
        handleOnValueInputChange={handleOnValueInputChange}
      />
    )
  }

  render () {
    return (
      <View>
        <View style={styles.list}>
          <FlatList
            data={this.props.currencies}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            extraData={this.props}
          />
        </View>
      </View>
    )
  }
}

export default ConverterList
