import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import List from '../List/List'

import ustyle from '../../utils/style'

const Lists = ({ lists }) =>
  <ScrollView style={ustyle.f1}>
    { lists.map(list => <List key={list.id} list={list} />)}
  </ScrollView>

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
}

export default Lists
