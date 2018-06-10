import { StyleSheet } from 'react-native'
import { scale } from '../../../assets/styles/scale'

const styles = StyleSheet.create({
  
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  login: {
    alignItems: 'center',
    paddingBottom: scale(60)
  }
})

export default styles
