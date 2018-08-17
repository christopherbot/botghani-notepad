import React, { PureComponent } from 'react'
import { TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import style from './NavButton.style'

export default class NavButton extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }

  state = {
    isNavOpen: false,
    buttonStyle: {
      up: style.lineUpRight,
      down: style.lineDownRight,
    },
  }

  toggleButtonStyle = ()  => {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
      buttonStyle: {
        up: prevState.isNavOpen ? style.lineUpRight : style.lineUpLeft,
        down: prevState.isNavOpen ? style.lineDownRight : style.lineDownLeft,
      },
    }))
  }

  onPress = () => {
    this.toggleButtonStyle()
    this.props.onPress()
  }

  render() {
    return (
      <TouchableOpacity style={style.view} onPress={this.onPress}>
        <View style={style.circle}>
          <View style={style.line1}></View>
          <View style={this.state.buttonStyle.up}></View>
          <View style={this.state.buttonStyle.down}></View>
        </View>
      </TouchableOpacity>
    )
  }
}
