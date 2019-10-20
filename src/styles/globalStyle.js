import { StyleSheet } from 'react-native'
import colors from 'styles/colors'

export default StyleSheet.create({
  debug: {
    backgroundColor: colors.debugBackground,
    borderColor: colors.debugBorder,
    borderWidth: 1,
  },
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
  w0: { width: 0 },
  z1: { zIndex: 1 },
})

export const border = ({
  c = 'black',
  w = 1,
  s = 'solid',
  r = 0,
} = {}) => ({
  borderWidth: w,
  borderStyle: s,
  borderColor: c,
  borderRadius: r,
})
