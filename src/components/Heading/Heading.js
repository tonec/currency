import React from 'react'
import { bool, node } from 'prop-types'
import { Text } from 'react-native'
import { scale } from '../../assets/styles/scale'
import styles from './styles'

const Heading = ({ h1, h2, h3, h4, children }) => {

  const style = [
    styles.heading,
    h1 && { fontSize: scale(40) },
    h2 && { fontSize: scale(34) },
    h3 && { fontSize: scale(28) },
    h4 && { fontSize: scale(22) }
  ]

  return (
    <Text style={style}>{children}</Text>
  )
}

Heading.propTypes = {
  h1: bool,
  h2: bool,
  h3: bool,
  h4: bool,
  children: node.isRequired
}

Heading.defaultProps = {
  h1: true,
  h2: false,
  h3: false,
  h4: false
}

export default Heading
