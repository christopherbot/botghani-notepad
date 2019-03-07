import { StyleSheet } from 'react-native'
import colors from 'styles/colors'

const barWidth = 2

export default StyleSheet.create({
  nav: {
    height: '100%',
    padding: 20,
    paddingTop: 35,
    backgroundColor: colors.navBackground,
    borderColor: colors.navAccent,
    borderStyle: 'solid',
    borderRightWidth: 1,
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
    color: colors.navText,
  },
  heartIcon: {
    marginLeft: 25,
  },
})
