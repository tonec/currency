import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'column'
  },

  linearGradient: {
    flex: 1
  },

  progressBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  wrapSearch: {
    zIndex: 10
  },

  wrapSearchInner: {
    paddingLeft: 20,
    paddingRight: 20
  },

  input: {
    color: '#1e1e1e',
    fontSize: 14,
    backgroundColor: '#fff',
    height: 34,
    padding: 10,
    paddingRight: 50,
    borderRadius: 17,
    borderColor: '#ececec',
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: '#d1d1d1',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.2
  },

  icon: {
    color: '#1e1e1e',
    backgroundColor: 'transparent',
    position: 'absolute',
    fontSize: 20,
    top: 6,
    right: 30
  }
})

export default styles
