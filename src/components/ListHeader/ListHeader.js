import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import NavButton from '../Buttons/NavButton/NavButton'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import { toggleNav } from '../../state/actions'

import ustyle from '../../utils/style'
import style from './ListHeader.style.js'

const ListHeader = ({ list, isNavOpen, toggleNav }) =>
    <View style={[style.view, ustyle.fr]}>
      { list && <ButtonMenu list={list}/> }
      <NavButton onPress={toggleNav} isNavOpen={isNavOpen} />
    </View>


ListHeader.propTypes = {
  list: PropTypes.object,
  isNavOpen : PropTypes.bool,
}

const mapDispatchToProps = {
  toggleNav,
}

export default connect(null, mapDispatchToProps)(ListHeader)
