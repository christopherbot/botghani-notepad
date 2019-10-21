import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

import gStyle from 'styles/globalStyle'
import style from './Button.style'

const Button = ({ children, onPress, buttonStyle, textStyle }) =>
  <TouchableOpacity onPress={onPress} style={[gStyle.fcenter, style.button, buttonStyle]}>
    <Text style={[style.text, textStyle]}>
      { children }
    </Text>
  </TouchableOpacity>

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
}

export default Button
