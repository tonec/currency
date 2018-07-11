import React, { Component } from 'react'
import { bool, func, object } from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { startMain } from '../../../app'
import { login } from '../../../redux/modules/auth/actions'
import { getIsRequesting, getUser } from '../../../redux/modules/auth/selectors'
import { ProgressBar } from '../../../components'
import Login from './Login'
import styles from './styles'

class LoginContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user) {
      startMain()
    } 
  }

  handleOnChange = (name, value) => {
    this.setState({ [name]: value.trim() })
  }

  handleOnPress = () => {
    this.props.login(this.state)
  }

  render () {
    const { isRequesting } = this.props
    const { email, password } = this.state

    if (isRequesting) {
      return <View style={styles.progressBar}><ProgressBar /></View>
    }

    return (
      <Login
        email={email}
        password={password}
        handleOnChange={this.handleOnChange}
        handleOnPress={this.handleOnPress}
      />
    )
  }
}

const mapState = state => ({
  isRequesting: getIsRequesting(state),
  user: getUser(state)
})

LoginContainer.propTypes = {
  isRequesting: bool.isRequired,
  user: object,
  login: func.isRequired
}

LoginContainer.defaultProps = {
  user: null
}

export default connect(mapState, { login })(LoginContainer)
