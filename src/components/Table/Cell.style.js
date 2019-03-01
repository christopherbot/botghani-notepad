import { StyleSheet } from 'react-native'
import colors from 'styles/colors'

export default StyleSheet.create({
  cell: {
    borderRightWidth: 0.25,
    borderBottomWidth: 0.25,
    borderColor: colors.cellBorder,
    height: 33,
  },
  headerCell: {
    padding: 4,
    backgroundColor: colors.cellBackground,
    height: 33,
    maxWidth: 100,
  },
  dataCell: {
    padding: 4,
    height: 33,
    maxWidth: 100,
  },
})
