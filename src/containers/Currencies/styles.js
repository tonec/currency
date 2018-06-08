import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  sectionHeader: {
    height: 26,
    paddingTop: 4,
    paddingLeft: 20,
    paddingRight: 20
  },

  sectionHeaderText: {
    backgroundColor: 'transparent',
    color: '#52B7DD',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center'
  },

  listItem: {
    height: 46
  },

  touchable: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8
  },

  wrapFlag: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  wrapText: {
    flex: 5
  },

  wrapIcon: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  flag: {
    borderRadius: 15,
    opacity: 0.8,
    marginLeft: 10,
    borderColor: '#fff',
    borderWidth: 2,
  },

  text: {
    color: '#1e1e1e',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },

  icon: {
    color: '#1e1e1e',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'transparent'
  }
})

export default styles
