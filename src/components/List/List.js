import React  from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import Table from '../Table/Table'

import style from './List.style'
import gStyle from '../../styles/globalStyle'

 const List = ({ list }) =>
  <View style={[gStyle.fc1, style.list]}>
    <Table list={list} />
  </View>

List.propTypes = {
  list: PropTypes.object.isRequired,
}

export default List
