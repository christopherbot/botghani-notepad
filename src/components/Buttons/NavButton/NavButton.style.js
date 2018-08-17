import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view: {
      margin: 15
  },
  circle: {
      borderWidth: 2.5,
      borderColor: 'black',
      width: 50,
      height: 50,
      borderRadius: 25,
      position: 'relative'
  },
  line1: {
    width: 30,
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
      { rotate: '45deg'}
    ]
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
      { rotate: '-45deg'}
    ]
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
      { rotate: '-45deg'}
    ]
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
      { rotate: '45deg'}
    ]
  },
})
