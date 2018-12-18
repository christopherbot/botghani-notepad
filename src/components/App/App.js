import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setActiveList } from '../../state/actions'

import List from '../List/List'

import gStyle from '../../styles/globalStyle'

class App extends PureComponent {
  static propTypes = {
    lists: PropTypes.array.isRequired,
    list: PropTypes.object,
    setActiveList: PropTypes.func.isRequired,
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
      <View style={gStyle.f1}>
        { this.props.list && <List list={this.props.list} /> }
      </View>
    )
  }
}

const mapStateToProps = ({ lists, globalUi }) => ({
  lists,
  list: lists.find(list => list.id === globalUi.activeListId),
})

const mapDispatchToProps = {
  setActiveList,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
