import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { setActiveList } from 'state/actions'
import { listPropType } from 'components/propTypeDefinitions'

import CreateList from 'components/CreateList/CreateList'
import Tabs from './Tabs'

import gStyle from 'styles/globalStyle'
import colors from 'styles/colors'
import style from './Drawer.style'

const drawerTabTypes = {
  Add: 'Add',
  List: 'List',
}

class Drawer extends PureComponent {
  static propTypes = {
    setActiveList: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    lists: PropTypes.arrayOf(listPropType).isRequired,
    activeListId: PropTypes.string,
    favouriteListId: PropTypes.string,
  }

  state = {
    drawerTab: this.props.lists.length ? drawerTabTypes.List : drawerTabTypes.Add,
  }

  componentDidUpdate({ lists }) {
    if (this.props.lists.length > lists.length) {
      // 500 ms to let drawer close before state changes
      setTimeout(() => {
        this.setState({ drawerTab: drawerTabTypes.List })
      }, 500)
    } else if (this.props.lists.length === 0 && lists.length !== 0) {
      this.setState({ drawerTab: drawerTabTypes.Add })
    }
  }

  get tabs() {
    return [
      {
        title: '+',
        onClick: () => this.setState({ drawerTab: drawerTabTypes.Add }),
        color: colors.drawerTabOne,
        active: this.state.drawerTab === drawerTabTypes.Add,
      },
      {
        title: 'Lists',
        onClick: () => this.setState({ drawerTab: drawerTabTypes.List }),
        color: colors.drawerTabTwo,
        active: this.state.drawerTab === drawerTabTypes.List,
      },
    ]
  }

  setActiveList = (listId) => {
    this.props.navigation.closeDrawer()
    this.props.setActiveList(listId)
  }

  render() {
    return (
      <View style={style.wrapper}>
        <Tabs tabs={this.tabs} />
        {
          this.state.drawerTab === drawerTabTypes.Add
            ? <CreateList />
            : (
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
                      {
                        list.id === this.props.favouriteListId &&
                          <Text style={style.heartIcon}>
                            💛
                          </Text>
                      }
                    </TouchableOpacity>,
                  )
                }
              </ScrollView>
            )
        }
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
