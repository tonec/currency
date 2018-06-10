import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

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
        <TextInput 
          value={this.state.username}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ username: text })}
        />
      </View>
    )
  }
}

export default LoginContainer
