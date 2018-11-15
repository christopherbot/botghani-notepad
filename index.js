import { AppRegistry, YellowBox } from 'react-native'
import BotghaniNotepad from './BotghaniNotepad'

// https://github.com/react-navigation/react-navigation/issues/3956#issuecomment-380648083
// https://github.com/react-navigation/react-navigation/issues/3956#issuecomment-380648083
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

AppRegistry.registerComponent('botghaniNotepad', () => BotghaniNotepad)
