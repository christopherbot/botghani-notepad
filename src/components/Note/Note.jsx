import React, { useState } from 'react'
import { Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'

import style from './Note.style'

const Note = props => {
  const [isBeingEdited, setEditedState] = useState(false)
  const [text, setChangeText] = useState()

  const updateNoteValue = () => {
    setEditedState(false)

    // update the props.text with a function:
    // props.updateNote(value)
  }

  const handleNotePress = () => {
    setChangeText(props.text)
    setEditedState(true)
  }

  return (
    <TouchableOpacity onPress={handleNotePress}>
      {
        isBeingEdited
          ? <TextInput
              style={style.textInput}
              onChangeText={text => setChangeText(text)}
              value={text}
              autoCapitalize={'sentences'}
              autoCorrect={false}
              autoFocus={true}
              onBlur={updateNoteValue}
            />
          : <Text style={style.note}>{props.text}</Text>
      }
    </TouchableOpacity>
  )
}

Note.propTypes = {
  text: PropTypes.string,
  updateNote: PropTypes.updateNote,
}

export default Note
