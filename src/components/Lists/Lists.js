import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import List from '../List/List'

import style from './Lists.style'
import ustyle from '../../utils/style'

const Lists = ({ lists }) =>
  <ScrollView style={[ustyle.f1, style.lists]}>
    { lists.map(list => <List key={list.id} list={list} />)}
  </ScrollView>

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
}

const mapStateToProps = ({ lists }) => ({
  lists,
})

export default connect(mapStateToProps)(Lists)
