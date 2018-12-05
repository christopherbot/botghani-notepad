import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'

import style from './NavButton.style'
import { toggleNav } from '../../../state/actions'

class NavButton extends PureComponent {
  static propTypes = {
    toggleNav: PropTypes.func.isRequired,
    isNavOpen: PropTypes.bool.isRequired,
  }

  state = {
    arrowTopStyle: style.lineUpRight,
    arrowBottomStyle: style.lineDownRight,
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      arrowTopStyle: nextProps.isNavOpen ? style.lineUpLeft : style.lineUpRight,
      arrowBottomStyle: nextProps.isNavOpen ? style.lineDownLeft : style.lineDownRight,
    }
  }

  render() {
    return (
      <TouchableOpacity style={style.view} onPress={this.props.navigation.toggleDrawer}>
        <View style={style.circle}>
          <View style={style.line1} />
          <View style={this.state.arrowTopStyle } />
          <View style={this.state.arrowBottomStyle} />
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = ({ globalUi }) => ({
  isNavOpen: globalUi.isNavOpen,
})

const mapDispatchToProps = {
  toggleNav,
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(NavButton))
