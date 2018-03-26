import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  listItem: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },

  wrapCode: {
    flex: 1.5,
    backgroundColor: 'transparent'
  },

  wrapInput: {
    flex: 5
  },

  wrapSymbol: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  wrapFlag: {
    flex: 1
  },

  code: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  input: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#879bc1',
    height: 36,
    padding: 10,
    borderRadius: 10,
    textAlign: 'right'
  },

  symbol: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  flag: {
    borderRadius: 15,
    opacity: 0.5,
    borderColor: '#fff',
    borderWidth: 2
  }
})

export default styles
