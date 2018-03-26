import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column'
  },

  linearGradient: {
    flex: 1
  },

  progressBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  wrapSearch: {
    height: 120,
    padding: 20,
    backgroundColor: '#7486ad'
  },

  input: {
    marginTop: 55,
    color: '#bbb',
    fontSize: 14,
    backgroundColor: '#fff',
    height: 34,
    padding: 10,
    paddingRight: 50,
    borderRadius: 10
  },

  icon: {
    color: '#bbb',
    backgroundColor: 'transparent',
    position: 'absolute',
    fontSize: 20,
    top: 82,
    right: 30
  }
})

export default styles
