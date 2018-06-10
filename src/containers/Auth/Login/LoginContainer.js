import React, { Component } from 'react'
import { View } from 'react-native'
import { Heading, Input } from '../../../components'
import styles from './styles'

class LoginContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.login}>
          <Heading h2>Log in</Heading>
          <Input 
            value={this.state.username}
            placeholder="Email address"
            handleOnChange={(text) => this.setState({ username: text })}
          />
          <Input 
            value={this.state.password}
            placeholder="Password"
            handleOnChange={(text) => this.setState({ password: text })}
          />
        </View>
      </View>
    )
  }
}

export default LoginContainer
