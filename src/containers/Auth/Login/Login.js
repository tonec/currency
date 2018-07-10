import React from 'react'
import { string, func } from 'prop-types'
import { View } from 'react-native'
import { Single } from '../../../components/Layout'
import { Heading, Input, Button } from '../../../components'
import styles from './styles'

const propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  handleOnChangeEmail: func.isRequired,
  handleOnChangePassword: func.isRequired,
  handleOnPress: func.isRequired
}

const Login = ({ email, password, handleOnChangeEmail, handleOnChangePassword, handleOnPress }) => (
  <Single>
    <View style={styles.login}>
      <Heading h2>Log in</Heading>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        placeholder="Email address"
        handleOnChange={handleOnChangeEmail}
      />
      <Input
        secureTextEntry
        autoCapitalize="none"
        value={password}
        placeholder="Password"
        handleOnChange={handleOnChangePassword}
      />
      <Button
        value="Sign in"
        style={styles.button}
        handleOnPress={handleOnPress}
      />
    </View>
  </Single>
)

Login.propTypes = propTypes

export default Login
