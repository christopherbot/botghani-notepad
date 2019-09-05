import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { listPropType } from 'components/propTypeDefinitions'

import ButtonMenu from 'components/ButtonMenu/ButtonMenu'

import gStyle from 'styles/globalStyle'

const ListHeader = ({ list }) =>
  <View style={gStyle.fr}>
    { list && <ButtonMenu list={list}/> }
  </View>

ListHeader.propTypes = {
  list: listPropType,
}

const mapStateToProps = ({ lists, globalUi }) => ({
  list: lists.find(list => list.id === globalUi.activeListId),
})

export default connect(mapStateToProps)(ListHeader)
