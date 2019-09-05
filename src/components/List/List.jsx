import React from 'react'
import { View } from 'react-native'
import { listPropType } from 'components/propTypeDefinitions'

import Table from 'components/Table/Table'

import gStyle from 'styles/globalStyle'
import style from './List.style'

const List = ({ list }) =>
  <View style={[gStyle.fc1, style.list]}>
    <Table list={list} />
  </View>

List.propTypes = {
  list: listPropType.isRequired,
}

export default List
