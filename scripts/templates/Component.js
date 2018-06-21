import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'

import style from './{{pascal}}.style.js'

export default class {{pascal}} extends Component {
  static propTypes = {}

  render() {
    return (
      <View style={style.view}>
        <Text style={style.text}>{templateInfo}</Text>
      </View>
    )
  }
}
