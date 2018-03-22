import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'
import ConverterListItem from './ConverterListItem'

import styles from './styles'

class ConverterList extends Component {

  static propTypes = {
    currencies: PropTypes.array.isRequired,
    conversionData: PropTypes.object.isRequired,
    handleOnValueInputChange: PropTypes.func.isRequired
  }

  keyExtractor = (item, index) => item.id

  renderItem = ({ item }) => {
    const { conversionData, handleOnValueInputChange } = this.props

    return (
      <ConverterListItem
        id={item.id}
        name={item.name}
        value={conversionData[item.id] ? conversionData[item.id].inputValue : 0}
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
