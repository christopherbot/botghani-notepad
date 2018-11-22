import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setActiveList } from '../../state/actions'

import Nav from '../Nav/Nav'
import ListHeader from '../ListHeader/ListHeader'
import List from '../List/List'
import NavButton from '../Buttons/NavButton/NavButton'

import style from './App.style'
import ustyle from '../../utils/style'

class App extends PureComponent {
  static propTypes = {
    isNavOpen: PropTypes.bool.isRequired,
  }

  static navigationOptions = () => {
    return {
      headerTitle : <ListHeader />,
      headerLeft : <NavButton />,
    }
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
