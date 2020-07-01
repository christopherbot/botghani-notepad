import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#000',
    padding: 4,
    marginVertical: 4,
  },

  headingContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  contentContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  deleteIconContainer: {
    padding: 4,
  },

  textInput: {
    borderColor: '#DDD',
    borderWidth: 1,
    width: 150,
  },
})
