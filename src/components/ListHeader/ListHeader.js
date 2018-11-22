import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import ButtonMenu from '../ButtonMenu/ButtonMenu'

import ustyle from '../../utils/style'

const ListHeader = ({ list }) =>
  <View style={ustyle.fr}>
    { list && <ButtonMenu list={list}/> }
  </View>

ListHeader.propTypes = {
  list: PropTypes.object,
}

const mapStateToProps = ({ lists, globalUi }) => ({
  list: lists.find(list => list.id === globalUi.activeListId),
})

export default connect(mapStateToProps)(ListHeader)
