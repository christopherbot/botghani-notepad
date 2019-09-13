import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  setActiveList,
  deleteList,
  setIsModalOpen,
} from 'state/actions'
import { listPropType } from 'components/propTypeDefinitions'

import List from 'components/List/List'
import Modal from 'components/Modal/Modal'
import HappyPaper from 'assets/happyPaper.svgx'
import SurprisedPaper from 'assets/surprisedPaper.svgx'

import gStyle from 'styles/globalStyle'
import style from './App.style'

export class App extends PureComponent {
  static propTypes = {
    lists: PropTypes.arrayOf(listPropType).isRequired,
    list: listPropType,
    favouriteListId: PropTypes.string,
    setActiveList: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      closeDrawer: PropTypes.func.isRequired,
    }).isRequired,
  }

  componentDidUpdate(prevProps) {
    if (this.props.lists.length < prevProps.lists.length) {
      this.props.setActiveList(null)
    } else if (this.props.lists.length > prevProps.lists.length) {
      this.props.setActiveList(this.props.lists[this.props.lists.length - 1].id)
    }
  }

  componentDidMount() {
    if (this.props.favouriteListId) {
      this.props.setActiveList(this.props.favouriteListId)
    }
  }

  deleteList = () => {
    this.props.deleteList(this.props.list.id)
    this.props.closeModal()
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <View style={gStyle.f1}>
        {
          this.props.isModalOpen &&
            <Modal
              closeModal={this.props.closeModal}
              deleteList={this.deleteList}
            />
        }

        {
          this.props.lists.length === 0 &&
            <View style={[gStyle.fcenter, gStyle.f1, style.emptyState]}>
              <SurprisedPaper />
              <Text style={style.emptyStateText}>
                Woah, you don&apos;t have any lists yet.
              </Text>
            </View>
        }

        {
          this.props.lists.length > 0 && !this.props.list &&
            <View style={[gStyle.fcenter, gStyle.f1, style.emptyState]}>
              <HappyPaper />
              <Text style={style.emptyStateText}>
                Hey, go select a list or create a new one.
              </Text>
            </View>
        }

        {
          this.props.list &&
            <List list={this.props.list} />
        }
      </View>
    )
  }
}

const mapStateToProps = ({ lists, globalUi }) => ({
  lists,
  list: lists.find(list => list.id === globalUi.activeListId),
  isModalOpen: globalUi.isModalOpen,
  favouriteListId: globalUi.favouriteListId,
})

const mapDispatchToProps = {
  setActiveList,
  deleteList,
  closeModal: setIsModalOpen.bind(null, false),
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
