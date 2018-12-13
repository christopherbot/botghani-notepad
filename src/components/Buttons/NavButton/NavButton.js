import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

import style from './NavButton.style'

const NavButton = ({ navigation }) => 
  <TouchableOpacity style={style.view} onPress={navigation.toggleDrawer}>
    <View style={style.circle}>
      <View style={style.line1} />
      <View style={style.lineUpRight} />
      <View style={style.lineDownRight} />
    </View>
  </TouchableOpacity>

export default withNavigation(NavButton)
