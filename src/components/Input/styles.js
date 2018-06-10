import { StyleSheet, Dimensions } from 'react-native'
import { scale, verticalScale, moderateScale } from '../../assets/styles/scale'
import { colors } from '../../assets/styles/variables'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  
  container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(20)
  },

  input: {
    height: scale(40),
    backgroundColor: colors.greyLight,
    color: colors.brandBlack,
    borderRadius: 20,
    padding: scale(10)
  }
})

export default styles
