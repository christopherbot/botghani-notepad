import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import style from './ColorPicker.style'

export const DEFAULT_LIST_COLORS = [
  '#c287e8',
  '#e88d67',
  '#41d3bd',
  '#5b618a',
  '#00fff5',
  '#e8e288',
  '#81e979',
  '#ce84ad',
  '#8f5c38',
  '#4c212a',
  '#053b06',
  '#f4d35e',
]

const ColorPicker = props =>
  <View style={style.colorPicker}>
    {
      props.colors.map(color =>
        <TouchableOpacity
          key={color}
          style={[
            style.color,
            props.activeColor === color && style.activeColor,
            {
              backgroundColor: color,
              ...props.colorStyles,
            },
          ]}
          onPress={() => props.onChangeColor(color)}
        />,
      )
    }
  </View>

ColorPicker.propTypes = {
  colors: PropTypes.array.isRequired,
  activeColor: PropTypes.string,
  colorStyles: PropTypes.object,
  onChangeColor: PropTypes.func.isRequired,
}

export default ColorPicker
