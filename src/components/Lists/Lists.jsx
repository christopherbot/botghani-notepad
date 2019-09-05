import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { listPropType } from 'components/propTypeDefinitions'

import List from 'components/List/List'

import gStyle from 'styles/globalStyle'
import style from './Lists.style'

const Lists = ({ lists }) =>
  <ScrollView style={[gStyle.f1, style.lists]}>
    { lists.map(list => <List key={list.id} list={list} />)}
  </ScrollView>

Lists.propTypes = {
  lists: PropTypes.arrayOf(listPropType).isRequired,
}

const mapStateToProps = ({ lists }) => ({
  lists,
})

export default connect(mapStateToProps)(Lists)
