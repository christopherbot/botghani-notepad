import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view: {
    height: 50,
    marginVertical: 20,
    marginHorizontal: 5,
  },
  circle: {
    borderWidth: 2.5,
    borderColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'relative',
  },
  line1: {
    width: 20,
    height: 2,
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
    left: 7.5,
    transform: [
      { translateY: -1 },
    ],
  },
  lineUpRight: {
    width: 10,
    height: 2,
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
    right: 2.5,
    transform: [
      { translateY: -4 },
      { translateX: -3 },
      { rotate: '45deg'},
    ],
  },
  lineDownRight: {
    width: 10,
    height: 2,
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
    right: 2.5,
    transform: [
      { translateY: 2 },
      { translateX: -3 },
      { rotate: '-45deg'},
    ],
  },
  lineUpLeft: {
    width: 10,
    height: 2,
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
    left: 7.5,
    transform: [
      { translateY: -4 },
      { translateX: -3 },
      { rotate: '-45deg'},
    ],
  },
  lineDownLeft: {
    width: 10,
    height: 2,
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
    left: 7.5,
    transform: [
      { translateY: 2 },
      { translateX: -3 },
      { rotate: '45deg'},
    ],
  },
})
