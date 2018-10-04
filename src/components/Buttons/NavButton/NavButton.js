import React, { PureComponent } from 'react'
import { Animated, TouchableOpacity, View } from 'react-native'
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
    fadeIn : new Animated.Value(1)
  }

  componentDidMount() {
    Animated.timing(
        this.state.fadeIn, {
          toValue : 0,
          duration : 5000,
        }
    ).start()
  }

  static getDerivedStateFromProps(nextProps) {
    return {
        arrowTopStyle: nextProps.isNavOpen ? style.lineUpLeft : style.lineUpRight ,
        arrowBottomStyle: nextProps.isNavOpen ?  style.lineDownLeft : style.lineDownRight,
      }
    }

  render() {
    let { fadeIn } = this.state
    return (
      <TouchableOpacity style={style.view} onPress={this.props.onPress}>
        <Animated.View style={[style.circle, {opacity : fadeIn }]}>
          <View style={style.line1} />
          <View style={this.state.arrowTopStyle } />
          <View style={this.state.arrowBottomStyle} />
        </Animated.View>
      </TouchableOpacity>
    )
  }
}
