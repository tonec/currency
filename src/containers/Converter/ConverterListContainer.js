import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRates } from '../../redux/modules/rates/actions'
import { Layout } from '../../components'
import ConverterList from './ConverterList'

class ConverterListContainer extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    fetchRates: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      currencies: [
        { name: 'USD', value: 0 },
        { name: 'GBP', value: 0 }
      ]
    }
  }

  componentDidMount () {
    this.props.fetchRates()
  }

  render () {
    const { navigator } = this.props

    return (
      <Layout navigator={navigator}>
        <ConverterList currencies={this.state.currencies} />
      </Layout>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {}
}

export default connect(mapStateToProps, { fetchRates })(ConverterListContainer)
