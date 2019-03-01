import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { 
  setActiveList, 
  deleteList,
  setIsModalOpen,
} from 'state/actions'

import List from 'components/List/List'
import Modal from 'components/Modal/Modal'

import gStyle from 'styles/globalStyle'

class App extends PureComponent {
  static propTypes = {
    lists: PropTypes.array.isRequired,
    list: PropTypes.object,
    setActiveList: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
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
    } else {
      this.props.navigation.openDrawer()
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
        { this.props.list && <List list={this.props.list} /> }
        { this.props.isModalOpen &&
          <Modal
            closeModal={this.props.closeModal}
            deleteList={this.deleteList}
          /> 
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
