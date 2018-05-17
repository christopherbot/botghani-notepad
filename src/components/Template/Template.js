import React, { Component } from 'react'
import {
  Platform,
  Text,
  View
} from 'react-native'

import style from './Template.style.js'

const templateInfo = Platform.select({
  ios: 'welcome to your template component on ios!',
  android: 'welcome to your template component on android!'
});

type Props = {};
export default class Template extends Component<Props> {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>{templateInfo}</Text>
      </View>
    )
  }
}
