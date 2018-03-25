import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  currencyTitle: {

  },

  currencyContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4
  },

  listItemElementFlag: {
    flex: 1
  },

  listItemElementInput: {
    flex: 5.5,
    paddingBottom: 6
  },

  listItemElementText: {
    flex: 1
  },

  listItemText: {
    color: '#fff'
  },

  input: {
    color: '#fff',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6
  }
})

export default styles
