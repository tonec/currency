import React, { Component } from 'react'
import { bool, func, object } from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { startMain } from '../../../app'
import { login } from '../../../redux/modules/auth/actions'
import { getIsRequesting, getUser } from '../../../redux/modules/auth/selectors'
import { Single } from '../../../components/Layout'
import { Heading, Input, Button, ProgressBar } from '../../../components'
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

  handleOnChangeEmail = text => {
    this.setState({ email: text.trim() })
  }

  handleOnChangePassword = text => {
    this.setState({ password: text.trim() })
  }

  handleOnPress = () => {
    this.props.login(this.state)
  }

  render () {
    const { isRequesting } = this.props

    if (isRequesting) {
      return <View style={styles.progressBar}><ProgressBar /></View>
    }

    return (
      <Single>
        <View style={styles.login}>
          <Heading h2>Log in</Heading>
          <Input 
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            value={this.state.email}
            placeholder="Email address"
            handleOnChange={this.handleOnChangeEmail}
          />
          <Input 
            secureTextEntry
            autoCapitalize="none"
            value={this.state.password}
            placeholder="Password"
            handleOnChange={this.handleOnChangePassword}
          />
          <Button 
            value="Sign in"
            handleOnPress={this.handleOnPress}
          />
        </View>
      </Single>
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
