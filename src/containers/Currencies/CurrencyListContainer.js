import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRates } from '../../redux/modules/rates/selectors'
import { Layout } from '../../components'
import CurrencyList from './CurrencyList'

class CurrencyListContainer extends Component {

  static propTypes = {
    rates: PropTypes.array,
    navigator: PropTypes.object.isRequired,
  }

  static defaultProps = {
    rates: []
  }

  render () {
    const { navigator } = this.props

    return (
      <Layout navigator={navigator}>
        <CurrencyList rates={this.props.rates} />
      </Layout>
    )
  }
}

const mapState = state => {
  return {
    rates: getRates(state)
  }
}

export default connect(mapState)(CurrencyListContainer)
