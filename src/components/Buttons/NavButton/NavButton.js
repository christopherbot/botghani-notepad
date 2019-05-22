import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

import style from './NavButton.style'

const NavButton = ({ navigation }) =>
  <TouchableOpacity style={style.wrapper} onPress={navigation.toggleDrawer}>
    <View style={style.line} />
    <View style={[style.line, style.middleLine]} />
    <View style={[style.line, style.bottomLine]} />
  </TouchableOpacity>

NavButton.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(NavButton)
