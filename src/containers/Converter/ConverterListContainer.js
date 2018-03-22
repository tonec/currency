import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRates } from '../../redux/modules/rates/actions'
import { getSelectedRates } from '../../redux/modules/rates/selectors'
import { Layout } from '../../components'
import ConverterList from './ConverterList'

class ConverterListContainer extends Component {

  static propTypes = {
    selectesRates: PropTypes.array,
    navigator: PropTypes.object.isRequired,
    fetchRates: PropTypes.func.isRequired
  }

  static defaultProps = {
    selectesRates: []
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      conversionData: {}
    }
  }

  componentDidMount () {
    this.props.fetchRates()
  }

  componentWillReceiveProps (nextProps) {
    this.setState(state => ({
      ...state,
      conversionData: this.generateValuesState(state.selectesRates, nextProps.selectesRates)
    }))
  }

  generateValuesState (currentRates, nextRates) {
    let result = {}

    nextRates.forEach(rate => {
      result[rate.id] = {
        rate: rate.value,
        rounding: rate.rounding,
        decimal_digits: rate.decimal_digits,
        inputValue: 0
      }
    })

    return result
  }

  handleOnValueInputChange = (id, value) => {
    this.setState(state => ({
      ...state,
      conversionData: {
        ...state.conversionData,
        [id]: {
          ...state.conversionData[id],
          inputValue: value
        }
      }
    }))
  }

  render () {
    const { navigator, selectesRates } = this.props
    const { conversionData } = this.state

    return (
      <Layout navigator={navigator}>
        <ConverterList
          currencies={selectesRates}
          conversionData={conversionData}
          handleOnValueInputChange={this.handleOnValueInputChange}
        />
      </Layout>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    selectesRates: getSelectedRates(state)
  }
}

export default connect(mapStateToProps, { fetchRates })(ConverterListContainer)
