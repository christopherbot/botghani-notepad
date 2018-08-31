import React from 'react'
import { View, Text } from 'react-native'
import CreateList from '../CreateList/CreateList'

import style from './Nav.style.js'

const Nav = () =>
  <View style={style.nav}>
    <CreateList />
  </View>

export default Nav
