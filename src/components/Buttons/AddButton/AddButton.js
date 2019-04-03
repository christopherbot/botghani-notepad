import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

import gStyle from 'styles/globalStyle'
import style from './AddButton.style'

const AddButton = ({ children, onPress, textStyle }) =>
  <TouchableOpacity onPress={onPress} style={[gStyle.fcenter, style.button]}>
    <Text style={[style.text, textStyle]}>
      { children }
    </Text>
  </TouchableOpacity>

AddButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  textStyle: PropTypes.object,
}

AddButton.defaultProps = {
  children: '+',
}

export default AddButton
