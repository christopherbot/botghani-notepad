import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import style from './Checkbox.style'

const Checkbox = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Text style={style.text}>{props.isChecked ? 'CHECKED' : 'NOT CHECKED'}</Text>
  </TouchableOpacity>
)

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default Checkbox
