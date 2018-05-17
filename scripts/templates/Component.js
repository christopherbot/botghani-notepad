import React, { Component } from 'react'
import {
  Platform,
  Text,
  View
} from 'react-native'

import style from './{{pascal}}.style.js'

const templateInfo = Platform.select({
  ios: 'welcome to your {{param}} component on ios!',
  android: 'welcome to your {{param}} component on android!'
});

type Props = {};
export default class {{pascal}} extends Component<Props> {
  render() {
    return (
      <View style={style.view}>
        <Text style={style.text}>{templateInfo}</Text>
      </View>
    )
  }
}
