import { StyleSheet } from 'react-native'
import { border } from 'styles/globalStyle'

export default StyleSheet.create({
  colorPicker: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  color: {
    width: 40,
    height: 40,
    margin: 2,
  },
  activeColor: {
    ...border({ w: 4 }),
  },
})
