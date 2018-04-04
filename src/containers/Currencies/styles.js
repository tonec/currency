import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  sectionHeader: {
    height: 42,
    backgroundColor: '#6e8ab8',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  sectionHeaderText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16
  },

  listItem: {
    height: 54
  },

  touchable: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },

  wrapIcon: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  wrapText: {
    flex: 5
  },

  wrapFlag: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  icon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },

  flag: {
    borderRadius: 15,
    opacity: 0.5,
    borderColor: '#fff',
    borderWidth: 2
  }
})

export default styles
