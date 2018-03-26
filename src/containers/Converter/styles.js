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

  wrapSymbol: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  wrapInput: {
    flex: 5
  },

  wrapCode: {
    flex: 1.5,
    backgroundColor: 'transparent'
  },

  wrapFlag: {
    flex: 1
  },

  symbol: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
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

  code: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  flag: {
    borderRadius: 15,
    opacity: 0.5,
    borderColor: '#fff',
    borderWidth: 2
  }
})

export default styles
