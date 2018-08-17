import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    height: '100%',
    zIndex: 1,
  },
  navButton: {
    zIndex: 1,
    marginTop: 15,
    height: 20,
  },
  createListWrapper: {
    padding: 20,
  },
})
