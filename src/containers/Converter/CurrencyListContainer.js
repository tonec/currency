import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from '../../components'
import CurrencyList from './CurrencyList'

class CurrencyListContainer extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      currencies: [
        { name: 'USD' },
        { name: 'GBP' }
      ]
    }
  }

  render () {
    const { navigator } = this.props

    return (
      <Layout navigator={navigator}>
        <CurrencyList currencies={this.state.currencies} />
      </Layout>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(CurrencyListContainer)
