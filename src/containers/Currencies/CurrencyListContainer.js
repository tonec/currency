import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRates } from '../../redux/modules/rates/selectors'
import CurrencyList from './CurrencyList'

class CurrencyListContainer extends Component {

  static propTypes = {
    rates: PropTypes.array
  }

  static defaultProps = {
    rates: []
  }

  render () {
    return (
      <CurrencyList rates={this.props.rates} />
    )
  }
}

const mapState = state => {
  return {
    rates: getRates(state)
  }
}

export default connect(mapState)(CurrencyListContainer)
