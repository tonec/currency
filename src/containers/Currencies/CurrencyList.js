import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import AtoZList from '../../components/AtoZList'
import CurrencyListItem from './CurrencyListItem'

import styles from './styles'

class CurrencyList extends Component {

  static propTypes = {
    rates: PropTypes.object.isRequired,
    selected: PropTypes.array,
    onCurrencyListChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    rates: [],
    selected: []
  }

  isSelected = (id) => this.props.selected.includes(id)

  keyExtractor = (item, index) => item.id

  renderSectionHeader = ({ title }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    )
  }

  renderItem = ({ item }) => {
    return (
      <CurrencyListItem
        id={item.id}
        name={item.name}
        countryCode={item.country_code}
        isSelected={this.isSelected(item.id)}
        onPressItem={this._onPressItem}
        onCurrencyListChange={this.props.onCurrencyListChange}
      />
    )
  }

  render () {
    const { rates } = this.props

    return (
      <AtoZList
        data={rates}
        cell={this.renderItem}
        cellHeight={46}
        sectionHeader={this.renderSectionHeader}
        sectionHeaderHeight={26}
      />
    )
  }
}

export default CurrencyList
