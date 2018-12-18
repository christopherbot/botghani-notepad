import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
  debug: { backgroundColor: colors.debug },
  f1: { flex: 1 },
  fr: { flexDirection: 'row' },
  fc: { flexDirection: 'column' },
  fr1: { flex: 1, flexDirection: 'row' },
  fc1: { flex: 1, flexDirection: 'column' },
  fg0: { flexGrow: 0 },
  fcenter: { justifyContent: 'center', alignItems: 'center' },
  fcenterMain: { justifyContent: 'center' }, // parallel to the flex direction
  fcenterCross: { alignItems: 'center' }, // perpendicular to the flex direction
  autoWidth: { width: 'auto' },
  w0:{ width: 0 },
  z1: { zIndex: 1 },
})
