import React, { PureComponent } from 'react'
import { TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import style from './NavButton.style'

export default class NavButton extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    isNavOpen: PropTypes.bool.isRequired,
  }

  state = {
    arrowTopStyle: style.lineUpRight,
    arrowBottomStyle: style.lineDownRight,
  }

  static getDerivedStateFromProps(nextProps) {
    return {
        arrowTopStyle: nextProps.isNavOpen ? style.lineUpLeft : style.lineUpRight ,
        arrowBottomStyle: nextProps.isNavOpen ?  style.lineDownLeft : style.lineDownRight,
      }
    }

  render() {
    return (
      <TouchableOpacity style={style.view} onPress={this.props.onPress}>
        <View style={style.circle}>
          <View style={style.line1} />
          <View style={this.state.arrowTopStyle } />
          <View style={this.state.arrowBottomStyle} />
        </View>
      </TouchableOpacity>
    )
  }
}
