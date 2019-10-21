import { StyleSheet } from 'react-native'
import colors from 'styles/colors'
import { border } from 'styles/globalStyle'

export default StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    fontSize: 17,
    color: colors.drawerText,
    marginTop: 20,
    paddingLeft: 10,
    ...border({ c: colors.drawerText, r: 2 }),
  },
  invalidTextInput: {
    borderColor: colors.invalid,
    backgroundColor: colors.invalidLight,
  },
  toggleButtonWrapper: {
    marginTop: 20,
  },
  toggleButton: {
    padding: 5,
    ...border(),
  },
  activeToggleButton: {
    backgroundColor: 'gold',
  },
  colorPickerWrapper: {
    marginTop: 20,
  },
  createButton: {
    marginTop: 20,
  },
  createButtonText: {
    color: colors.drawerText,
    fontSize: 20,
  },
})
