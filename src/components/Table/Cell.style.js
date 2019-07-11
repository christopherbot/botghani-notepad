import { StyleSheet } from 'react-native'
import colors from 'styles/colors'

export default StyleSheet.create({
  cellWrapper: {
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    paddingHorizontal: 4,
  },
  cell: {
    padding: 4,
    height: 33,
    minWidth: 100,
    maxWidth: 150,
  },
  headerCellText: {
    color: colors.headerCellText,
  },
})
