import React, { Component } from 'react'
import { bool, func, object } from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { startMain } from '../../../app'
import { login } from '../../../redux/modules/auth/actions'
import { getIsRequesting, getUser } from '../../../redux/modules/auth/selectors'
import { ProgressBar } from '../../../components'
import Register from './Register'
import styles from './styles'

class RegisterContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      retypePassword: ''
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
    const { email, password, retypePassword } = this.state

    if (isRequesting) {
      return <View style={styles.progressBar}><ProgressBar /></View>
    }

    return (
      <Register
        email={email}
        password={password}
        retypePassword={retypePassword}
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

RegisterContainer.propTypes = {
  isRequesting: bool.isRequired,
  user: object,
  login: func.isRequired
}

RegisterContainer.defaultProps = {
  user: null
}

export default connect(mapState, { login })(RegisterContainer)
