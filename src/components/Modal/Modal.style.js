import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
  innerModalContainer: {
    paddingVertical: 50,
    backgroundColor: colors.modalBackground,
    height: "100%"
  },
  questionText: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 125, 
  },
})
