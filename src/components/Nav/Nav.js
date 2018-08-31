import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import CreateList from '../CreateList/CreateList'

import style from './Nav.style.js'
import ustyle from '../../utils/style'

const Nav = ({ lists }) =>
  <View style={style.nav}>
    <CreateList />
    <ScrollView style={ustyle.f1}>
      { lists.map(list => <Text key={list.id}>{list.name}</Text>)}
    </ScrollView>
  </View>

const mapStateToProps = ({ lists }) => ({
  lists,
})

export default connect(mapStateToProps)(Nav)
