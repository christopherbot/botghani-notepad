import { StyleSheet } from 'react-native'
import colors from 'styles/colors'

export default StyleSheet.create({
  view: {
    backgroundColor: colors.splashBackground,
  },
  logo: {
    marginBottom: 20,
  },
  ink: {
    marginLeft: 25,
  },
  paper: {
    position: 'absolute',
    bottom: -16,
    right: -22,
    transform: [{ rotate: '-45deg' }],
  },
})
