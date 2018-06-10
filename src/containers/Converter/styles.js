import { StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from '../../assets/styles/scale'
import { colors } from '../../assets/styles/variables'

const styles = StyleSheet.create({

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: scale(10),
    backgroundColor: colors.brandWhite
  },

  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft: 6,
    marginRight: 6,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 40,
    backgroundColor: colors.brandWhite,
    borderColor: colors.greyLight,
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: colors.greyMid,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.2
  },

  wrapFlag: {
    flex: 1
  },

  wrapCode: {
    flex: 2,
    backgroundColor: 'transparent'
  },

  wrapInput: {
    flex: 4
  },

  wrapSymbol: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  flag: {
    borderRadius: 15,
    opacity: 0.8,
    borderColor: colors.brandWhite,
    borderWidth: 2,
    marginLeft: 6
  },

  code: {
    color: colors.brandBlack,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 0,
    marginRight: 10
  },

  input: {
    color: colors.brandBlack,
    fontSize: 16,
    fontWeight: 'bold',
    height: 36,
    padding: 10,
    textAlign: 'right',
  },

  symbol: {
    color: colors.brandBlack,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10
  }
})

export default styles
