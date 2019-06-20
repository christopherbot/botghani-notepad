import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { setActiveList } from 'state/actions'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

import CreateList from 'components/CreateList/CreateList'

import gStyle from 'styles/globalStyle'
import style from './Drawer.style'

class Drawer extends PureComponent {
  static propTypes = {
    setActiveList: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    lists: PropTypes.array,
  }

  setActiveList = (listId) => {
    this.props.navigation.closeDrawer()
    this.props.setActiveList(listId)
  }

  render() {
    return (
      <View style={style.wrapper}>
        <CreateList />
        <ScrollView style={gStyle.f1}>
          {
            this.props.lists.map(list =>
              <TouchableOpacity
                key={list.id}
                onPress={() => this.setActiveList(list.id)}
                style={[
                  gStyle.fr,
                  list.id === this.props.activeListId ? style.activeItem : style.item,
                ]}
              >
                <Text style={style.itemText}>
                  { list.name }
                </Text>
                { list.id === this.props.favouriteListId && <Text style={style.heartIcon}>💛</Text> }
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

const mapStateToProps = ({ lists, globalUi }) => ({
  lists,
  activeListId: globalUi.activeListId,
  favouriteListId: globalUi.favouriteListId,
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Drawer))
