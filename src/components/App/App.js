import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Nav from '../Nav/Nav'
import NavButton from '../Buttons/NavButton/NavButton'
import Lists from '../Lists/Lists'
import { toggleNav } from '../../state/actions'

import style from './App.style'
import ustyle from '../../utils/style'

class App extends PureComponent {
  static propTypes = {
    isNavOpen: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <View style={ustyle.f1}>
        <View style={style.navWrapper}>
          { this.props.isNavOpen && <Nav /> }
          <NavButton onPress={this.props.toggleNav} />
        </View>
        <Lists />
      </View>
    )
  }
}

const mapStateToProps = ({ globalUi }) => ({
  isNavOpen: globalUi.isNavOpen,
})

const mapDispatchToProps = {
  toggleNav,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
