import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#1a1a1a'
  },

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10
  },

  listItemText: {
    color: '#fff'
  },

  input: {
    color: '#fff',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default styles
