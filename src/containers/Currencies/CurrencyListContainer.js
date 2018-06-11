import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateFilter, updateSelected } from '../../redux/modules/rates/actions'
import { getRatesFiltered, getFilterText, getSelected } from '../../redux/modules/rates/selectors'
import { ScrollModalWithSearch } from '../../components'
import CurrencyList from './CurrencyList'

class CurrencyListContainer extends Component {

  static propTypes = {
    rates: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
    filterText: PropTypes.string,
    selected: PropTypes.array,
    updateFilter: PropTypes.func.isRequired,
    updateSelected: PropTypes.func.isRequired
  }

  static defaultProps = {
    filterText: '',
    selected: []
  }

  handleOnSearchChange = filterText => {
    this.props.updateFilter(filterText)
  }

  handleCurrencyListChange = id => {
    this.props.updateSelected(id)
  }

  render () {
    const { navigator, rates, filterText, selected } = this.props

    return (
      <ScrollModalWithSearch
        navigator={navigator}
        filterText={filterText}
        onSearchChange={this.handleOnSearchChange}
      >
        <CurrencyList
          rates={rates}
          selected={selected}
          onCurrencyListChange={this.handleCurrencyListChange}
        />
      </ScrollModalWithSearch>
    )
  }
}

const mapState = (state) => {
  return {
    rates: getRatesFiltered(state),
    filterText: getFilterText(state),
    selected: getSelected(state)
  }
}

export default connect(mapState, { updateFilter, updateSelected })(CurrencyListContainer)
