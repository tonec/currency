import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchCurrencies } from '../../redux/modules/currencies/actions'

class CurrencyListContainer extends Component {

  static propTypes = {
    fetchCurrencies: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.fetchCurrencies()
  }

  render () {
    return (
      <Text>dadjdf</Text>
    )
  }
}

const mapState = state => {
  return {
    currencies: {}
  }
}

export default connect(mapState, { fetchCurrencies })(CurrencyListContainer)
