import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

import gStyle from 'styles/globalStyle'
import style from './AddButton.style'

const AddButton = ({ children, onPress }) =>
  <TouchableOpacity style={[gStyle.fcenter, style.button]} onPress={onPress}>
    <Text style={style.text}>
      { children }
    </Text>
  </TouchableOpacity>

AddButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

AddButton.defaultProps = {
  children: '+',
}

export default AddButton
