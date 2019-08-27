import { StyleSheet } from 'react-native'
import colors from 'styles/colors'

const barWidth = 2

export default StyleSheet.create({
  wrapper: {
    height: '100%',
    padding: 20,
    paddingTop: 35,
    backgroundColor: colors.drawerBackground,
    borderColor: colors.drawerAccent,
    borderStyle: 'solid',
    borderRightWidth: 1,
    marginBottom: 10,
  },
  item: {
    marginVertical: 15,
    paddingLeft: 10,
  },
  activeItem: {
    marginVertical: 15,
    paddingLeft: 10 - barWidth,
    borderColor: 'black',
    borderLeftWidth: barWidth,
  },
  itemText: {
    fontSize: 17,
    color: colors.drawerText,
  },
  heartIcon: {
    marginLeft: 25,
  },
})
