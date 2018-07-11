import React from 'react'
import { string, func } from 'prop-types'
import { View } from 'react-native'
import { Single } from '../../../components/Layout'
import { Heading, Input, Button } from '../../../components'
import styles from './styles'

const propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  handleOnChange: func.isRequired,
  handleOnPress: func.isRequired
}

const Login = ({ email, password, handleOnChange, handleOnPress }) => (
  <Single>
    <View style={styles.login}>
      <Heading h2>Log in</Heading>
      <Input
        name="email"
        value={email}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email address"
        handleOnChange={handleOnChange}
      />
      <Input
        name="password"
        value={password}
        secureTextEntry
        autoCapitalize="none"
        placeholder="Password"
        handleOnChange={handleOnChange}
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
