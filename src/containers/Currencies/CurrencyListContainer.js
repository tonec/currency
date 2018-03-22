import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSelected } from '../../redux/modules/rates/actions'
import { getRates, getSelected } from '../../redux/modules/rates/selectors'
import { Layout } from '../../components'
import CurrencyList from './CurrencyList'

class CurrencyListContainer extends Component {

  static propTypes = {
    rates: PropTypes.array,
    navigator: PropTypes.object.isRequired,
    selected: PropTypes.array,
    updateSelected: PropTypes.func.isRequired
  }

  static defaultProps = {
    rates: [],
    selected: []
  }

  handleCurrencyListChange = id => {
    this.props.updateSelected(id)
  }

  render () {
    const { navigator, rates, selected } = this.props

    return (
      <Layout navigator={navigator}>
        <CurrencyList
          rates={rates}
          selected={selected}
          onCurrencyListChange={this.handleCurrencyListChange}
        />
      </Layout>
    )
  }
}

const mapState = state => {
  return {
    rates: getRates(state),
    selected: getSelected(state)
  }
}

export default connect(mapState, { updateSelected })(CurrencyListContainer)
