import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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

  alphabetSidebar: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
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
