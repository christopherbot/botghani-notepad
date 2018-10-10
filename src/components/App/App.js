import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Nav from '../Nav/Nav'
import ListHeader from '../ListHeader/ListHeader'
import List from '../List/List'
import { setActiveList } from '../../state/actions'

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

  render() {
    return (
      <View style={ustyle.f1}>
        <View style={style.navWrapper}>
          { this.props.isNavOpen && <Nav /> }
        </View>
        <ListHeader list={this.props.list} isNavOpen={this.props.isNavOpen} />
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
