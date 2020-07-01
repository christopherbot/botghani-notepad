import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { listPropType } from 'components/propTypeDefinitions'
import Card from 'components/Card/Card'

import gStyle from 'styles/globalStyle'
import style from './List.style'

const List = (props) => (
  <View style={[gStyle.fr1, style.listContainer]}>
    <ScrollView style={gStyle.fc}>
      {
        props.list.items.map(item => (
          <Card
            key={item.id}
            id={item.id}
            listId={props.list.id}
            item={item}
            isChecked={item.isChecked}
            isCheckList={props.list.isCheckList}
            updateListItem={props.updateListItem}
          />
        ))
      }
      <TouchableOpacity onPress={props.createItem}>
        <Text style={style.plusIcon}>+</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
)

List.propTypes = {
  list: listPropType.isRequired,
  createItem: PropTypes.func,
  updateListItem: PropTypes.func,
}

export default List
