import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import update from 'react-addons-update'
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
      baseId: null,
      baseRate: 1,
      baseVolume: 0
    }
  }

  componentDidMount () {
    this.props.fetchRates()
  }

  handleOnValueInputChange = (id, rate, volume) => {
    console.log(id, volume, rate)
    // Base is the currency item being updated
    this.setState(state => ({
      ...state,
      baseId: id,
      baseRate: rate,
      baseVolume: volume
    }))
  }

  render () {
    const { navigator, selectesRates } = this.props
    const { baseId, baseRate, baseVolume } = this.state

    return (
      <Layout navigator={navigator}>
        <ConverterList
          currencies={selectesRates}
          baseId={baseId}
          baseRate={baseRate}
          baseVolume={baseVolume}
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
