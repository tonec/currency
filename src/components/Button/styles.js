import { StyleSheet, Dimensions } from 'react-native'
import { scale } from '../../assets/styles/scale'
import { colors } from '../../assets/styles/variables'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({

  container: {
    width: width,
    paddingHorizontal: scale(20),
    marginTop: scale(20),
    marginBottom: scale(10)
  },

  button: {
    height: scale(40),
    backgroundColor: colors.brandPrimary,
    borderRadius: scale(20),
    paddingHorizontal: scale(20),
    alignItems: 'center',
  },

  text: {
    color: colors.brandWhite,
    lineHeight: scale(40),
    fontSize: scale(14),
    fontWeight: 'bold'
  }
})

export default styles
