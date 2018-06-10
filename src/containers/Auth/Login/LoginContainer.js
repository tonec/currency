import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Input } from '../../../components'

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
      <View>
        <Text>Log In</Text>
        <Input 
          value={this.state.username}
          handleOnChange={(text) => this.setState({ username: text })}
        />
      </View>
    )
  }
}

export default LoginContainer
