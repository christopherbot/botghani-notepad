import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  debug: { backgroundColor: 'gold' },
  f1: { flex: 1 },
  fr: { flexDirection: 'row' },
  fc: { flexDirection: 'column' },
  fr1: { flex: 1, flexDirection: 'row' },
  fc1: { flex: 1, flexDirection: 'column' },
  fcenter: { justifyContent: 'center', alignItems: 'center' },
  fcenterMain: { justifyContent: 'center' }, // parallel to the flex direction
  fcenterCross: { alignItems: 'center' }, // perpendicular to the flex direction
  autoWidth: { width: 'auto' },
  z1: { zIndex: 1 },
})
