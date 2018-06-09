import { StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/variables'

export default StyleSheet.create({
  
  container: {
    flex: 1
  },

  sectionListContainer: {
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'center',
    right: 0,
    top: 0,
    bottom: 0
  },

  item: {
    paddingLeft: 10,
    paddingRight: 5
  },

  text: {
    fontWeight: '700',
    color: colors.brandPrimary
  },

  inactivetext: {
    fontWeight: '700',
    color: colors.greyLight
  }
})

