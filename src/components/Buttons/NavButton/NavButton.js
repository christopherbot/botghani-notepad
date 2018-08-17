import React, { PureComponent } from 'react'
import {
  TouchableOpacity,
  View
} from 'react-native'

import style from './NavButton.style'

export default class NavButton extends PureComponent {
  state = {
    open: false,
    currentStyle: {
      up: style.lineUpRight,
      down: style.lineDownRight,
    },
  }

  swapState = ()  => {
    this.setState((prevState) => ({
      open: !prevState.open,
      currentStyle: {
        up: prevState.open ? style.lineUpRight : style.lineUpLeft,
        down: prevState.open ? style.lineDownRight : style.lineDownLeft,
      },
    }))
  }

  render() {
    return (
      <TouchableOpacity style={style.view} onPress={this.swapState}>
        <View style={style.circle}>
          <View style={style.line1}></View>
          <View style={this.state.currentStyle.up}></View>
          <View style={this.state.currentStyle.down}></View>
        </View>
      </TouchableOpacity>
    )
  }
}
