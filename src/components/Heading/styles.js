import { StyleSheet } from 'react-native'
import { scale } from '../../assets/styles/scale'
import { colors } from '../../assets/styles/variables'

const styles = StyleSheet.create({
  heading: {
    color: colors.brandPrimary,
    fontWeight: 'bold',
    marginBottom: scale(10)
  }
})

export default styles
