import { StyleSheet, Dimensions } from 'react-native'
import { scale } from '../../assets/styles/scale'
import { colors } from '../../assets/styles/variables'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  
  container: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    marginBottom: scale(10)
  },

  input: {
    height: scale(40),
    backgroundColor: colors.greyLight,
    color: colors.brandBlack,
    borderRadius: scale(20),
    paddingHorizontal: scale(20)
  }
})

export default styles
