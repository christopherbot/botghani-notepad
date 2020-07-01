import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import PropTypes from 'prop-types'
import { itemPropType } from 'utils/list'
import Checkbox from 'components/Checkbox/Checkbox'
import Note from 'components/Note/Note'

import style from './Card.style'
import gStyle from 'styles/globalStyle'

const Card = props => {
  const [shouldShowNotePlaceholder, setShowNotePlaceholder] = useState(false)
  const [text, setChangeText] = useState()

  const onTextInputBlur = text => {
    setShowNotePlaceholder(false)

    if (!text.trim()) return

    props.addNote(text)

    setChangeText('')
  }

  return (
    <View style={[gStyle.fc, style.cardContainer]}>
      <View style={[gStyle.fr1, style.headingContainer]}>
        <Text style={style.mainTitle}>
          {props.item.name}
        </Text>
        { props.isCheckList &&
            <Checkbox
              isChecked={props.item.isChecked}
              onPress={() => {
                props.updateListItem(
                  props.listId, 
                  props.item.id, 
                  { isChecked: !props.item.isChecked }
                )
              }}
            /> }
      </View>

      <View style={[gStyle.fr1, style.contentContainer]}>
        <View style={[style.notesContainer]}>
          {
            props.item.notes.map(note => (
              <Note
                text={note.name}
                key={note.id}
                updateNote={props.updateNote}
              />
            ))
          }
          {
            shouldShowNotePlaceholder &&
              <TextInput
                style={style.textInput}
                onChangeText={setChangeText}
                value={text}
                autoCapitalize="sentences"
                onBlur={onTextInputBlur}
              />
          }
          {/* todo add plus add-note icon
            Add item to list button */
          }
          <TouchableOpacity onPress={() => setShowNotePlaceholder(true)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        {/* todo add trash icon
          todo? add prompt to delete
        */}
        <TouchableOpacity 
          onPress={props.deleteListItem}
          style={style.deleteIconContatiner}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

Card.propTypes = {
  item: itemPropType.isRequired,
  isCheckList: PropTypes.bool.isRequired,
  listId: PropTypes.string.isRequired,

  addListItem: PropTypes.func,
  deleteListItem: PropTypes.func,
  updateListItem: PropTypes.func,

  addNote: PropTypes.func,
  updateNote: PropTypes.func,
  deleteNote: PropTypes.func,
}

export default Card
