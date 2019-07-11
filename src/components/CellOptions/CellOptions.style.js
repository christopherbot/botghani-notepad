import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view: {
    height: "50%",
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.9)",
    position: "absolute",
    top: 0, 
    left: 0,
    padding: 5,
    justifyContent: "center"
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  buttonText: {
    fontSize: 30,
    color: "white"
  },
  text: {
    color: "white",
    fontSize: 20,
    marginBottom: 28,
    textTransform: "uppercase",
  },
})
