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
      selectesRates: this.props.selectesRates
    }
  }

  componentDidMount () {
    this.props.fetchRates()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectesRates !== this.props.selectesRates) {
      this.setState((state) => ({
        ...state,
        selectesRates: state.selectesRates.concat(nextProps.selectesRates)
      }))
    }
  }

  render () {
    const { navigator } = this.props

    return (
      <Layout navigator={navigator}>
        <ConverterList currencies={this.state.selectesRates} />
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
