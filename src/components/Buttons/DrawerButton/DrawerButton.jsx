import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

import style from './DrawerButton.style'

const DrawerButton = ({ navigation }) =>
  <TouchableOpacity style={style.wrapper} onPress={navigation.toggleDrawer}>
    <View style={style.line} />
    <View style={[style.line, style.middleLine]} />
    <View style={[style.line, style.bottomLine]} />
  </TouchableOpacity>

DrawerButton.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(DrawerButton)
