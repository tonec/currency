import React from 'react'
import { string, func } from 'prop-types'
import { View } from 'react-native'
import { Single } from '../../../components/Layout'
import { Heading, Input, Button } from '../../../components'
import styles from './styles'

const propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  retypePassword: string.isRequired,
  handleOnChange: func.isRequired,
  handleOnPress: func.isRequired
}

const Register = ({ email, password, retypePassword, handleOnChange, handleOnPress }) => (
  <Single>
    <View style={styles.register}>
      <Heading h2>Register</Heading>
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
      <Input
        name="retypePassword"
        value={retypePassword}
        secureTextEntry
        autoCapitalize="none"
        placeholder="Retype password"
        handleOnChange={handleOnChange}
      />
      <Button
        value="Sign up"
        style={styles.button}
        handleOnPress={handleOnPress}
      />
    </View>
  </Single>
)

Register.propTypes = propTypes

export default Register
