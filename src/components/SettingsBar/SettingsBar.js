import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import NavButton from '../Buttons/NavButton/NavButton'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import { toggleNav } from '../../state/actions'

import ustyle from '../../utils/style'
import style from './SettingsBar.style.js'

const SettingsBar = ({ list, isNavOpen, toggleNav }) =>
  <View style={[style.view, ustyle.fr]}>
    { list && <ButtonMenu list={list}/> }
    <NavButton onPress={toggleNav} isNavOpen={isNavOpen} />
  </View>


SettingsBar.propTypes = {
  list: PropTypes.object,
  isNavOpen : PropTypes.bool,
}

const mapDispatchToProps = {
  toggleNav,
}

export default connect(null, mapDispatchToProps)(SettingsBar)
