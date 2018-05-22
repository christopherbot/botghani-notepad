import React  from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const List = ({ name }) => <Text>{name}</Text>

List.propTypes = {
  name: PropTypes.string.isRequired,
}

export default List
