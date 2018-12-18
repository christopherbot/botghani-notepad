import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { setActiveList } from '../../state/actions'
import { withNavigation } from 'react-navigation'

import CreateList from '../CreateList/CreateList'

import style from './Nav.style.js'
import gStyle from '../../styles/globalStyle'

class Nav extends PureComponent {
  setActiveList = (listId) => {
    this.props.navigation.closeDrawer()
    this.props.setActiveList(listId)
  }

  render() {
    return (
      <View style={style.nav}>
        <CreateList />
        <ScrollView style={gStyle.f1}>
          {
            this.props.lists.map(list =>
              <TouchableOpacity key={list.id} onPress={() => this.setActiveList(list.id)}>
                <Text>{list.name}</Text>
              </TouchableOpacity>
            )
          }
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  setActiveList,
}

const mapStateToProps = ({ lists }) => ({
  lists,
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Nav))
