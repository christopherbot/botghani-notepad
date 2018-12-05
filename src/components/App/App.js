import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setActiveList } from '../../state/actions'

import Nav from '../Nav/Nav'
import List from '../List/List'

import style from './App.style'
import ustyle from '../../utils/style'

class App extends PureComponent {
  static propTypes = {
    isNavOpen: PropTypes.bool.isRequired,
  }

  componentDidUpdate(prevProps) {
    if (this.props.lists.length < prevProps.lists.length) {
      this.props.setActiveList(null)
    } else if (this.props.lists.length > prevProps.lists.length) {
      this.props.setActiveList(this.props.lists[this.props.lists.length - 1].id)
    }
  }

  componentDidMount() {
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <View style={ustyle.f1}>
        { this.props.list && <List list={this.props.list} /> }
      </View>
    )
  }
}

const mapStateToProps = ({ lists, globalUi }) => ({
  isNavOpen: globalUi.isNavOpen,
  lists,
  list: lists.find(list => list.id === globalUi.activeListId),
})

const mapDispatchToProps = {
  setActiveList,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
