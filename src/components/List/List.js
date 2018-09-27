import React  from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import Table from '../Table/Table'

import style from './List.style'
import ustyle from '../../utils/style'

 const List = ({ list }) =>
  <View style={[ustyle.fc1, style.list]}>
    <Table list={list} />
  </View>

List.propTypes = {
  list: PropTypes.object.isRequired,
}

export default List
