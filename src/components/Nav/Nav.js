import React from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { createDrawerNavigator } from 'react-navigation'
import { setActiveList } from '../../state/actions'

import CreateList from '../CreateList/CreateList'

import style from './Nav.style.js'
import ustyle from '../../utils/style'

const Nav = ({ lists, setActiveList }) =>
  <View style={style.nav}>
    <CreateList />
    <ScrollView style={ustyle.f1}>
      {
        lists.map(list =>
          <TouchableOpacity key={list.id} onPress={() => setActiveList(list.id)}>
            <Text>{list.name}</Text>
          </TouchableOpacity>
        )
      }
    </ScrollView>
  </View>

const mapDispatchToProps = {
  setActiveList,
}

const mapStateToProps = ({ lists }) => ({
  lists,
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

export const DrawerStack = createDrawerNavigator({
  screen1: { screen: Nav },
}, {
  contentComponent: () => <Nav />,
})
