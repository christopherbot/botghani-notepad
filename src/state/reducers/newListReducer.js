import { handleActions } from 'redux-actions'
import {
  addList,
  updateList,
  deleteList,
  addListItem,
  updateListItem,
  deleteListItem,
  addListItemNote,
  updateListItemNote,
  deleteListItemNote,
  mergeLists,
} from 'state/newActions'

const defaultState = []

export default handleActions({
  [addList](state, { payload }) {
    return [
      ...state,
      payload.list,
    ]
  },

  [updateList](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          ...payload.change,
        }
      }

      return list
    })
  },

  [deleteList](state, { payload }) {
    return state.filter(list => list.id !== payload.listId)
  },

  [addListItem](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          items: [
            ...list.items,
            payload.item,
          ],
        }
      }

      return list
    })
  },

  [updateListItem](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          items: list.items.map((item) => {
            if (item.id === payload.itemId) {
              return {
                ...item,
                ...payload.change,
              }
            }

            return item
          }),
        }
      }

      return list
    })
  },

  [deleteListItem](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          items: list.items.filter(item => item.id !== payload.itemId),
        }
      }

      return list
    })
  },

  [addListItemNote](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          items: list.items.map((item) => {
            if (item.id === payload.itemId) {
              return {
                ...item,
                notes: [
                  ...item.notes,
                  payload.note,
                ],
              }
            }

            return item
          }),
        }
      }

      return list
    })
  },

  [updateListItemNote](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          items: list.items.map((item) => {
            if (item.id === payload.itemId) {
              return {
                ...item,
                notes: item.notes.map((note) => {
                  if (note.id === payload.noteId) {
                    return {
                      ...note,
                      ...payload.change,
                    }
                  }

                  return note
                }),
              }
            }

            return item
          }),
        }
      }

      return list
    })
  },

  [deleteListItemNote](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          items: list.items.map((item) => {
            if (item.id === payload.itemId) {
              return {
                ...item,
                notes: item.notes.filter(note => note.id !== payload.noteId),
              }
            }

            return item
          }),
        }
      }

      return list
    })
  },

  [mergeLists](state, { payload }) {
    // The outgoing list is the one that will be modified.
    const outgoingList = state.find(({ id }) => id === payload.outgoingListId)
    // The incoming list is the one that will be dissolved.
    const incomingList = state.find(({ id }) => id === payload.incomingListId)

    if (!incomingList || !outgoingList) {
      return state
    }

    return state.reduce((lists, list) => {
      if (list.id === outgoingList.id) {
        const modifiedList = { ...list }

        if (payload.deepMerge) {
          modifiedList.items = incomingList.items.reduce((outgoingItems, incomingItem) => {
            // Find an outgoing item with the same name as the incoming item
            const similarOutgoingItem = outgoingItems.find(({ name }) => name === incomingItem.name)

            if (similarOutgoingItem) {
              // Merge the notes for items of the same name
              const newNotes = incomingItem.notes.reduce((outgoingNotes, incomingNote) => {
                if (!outgoingNotes.some(({ name }) => name === incomingNote.name)) {
                  // Only keep incoming notes that are not similar to any outgoing notes
                  outgoingNotes.push(incomingNote)
                }

                return outgoingNotes
              }, [...similarOutgoingItem.notes])

              outgoingItems[outgoingItems.indexOf(similarOutgoingItem)] = {
                ...similarOutgoingItem,
                notes: newNotes,
              }
            } else {
              // Add incoming items that are not similar to any existing items
              outgoingItems.push(incomingItem)
            }

            return outgoingItems
          }, [...list.items])
        } else {
          modifiedList.items = [
            ...list.items,
            ...incomingList.items,
          ]
        }

        lists.push(modifiedList)
      } else if (list.id !== payload.incomingListId) {
        // The incoming list should no longer be in state so only re-add other lists
        lists.push(list)
      }

      return lists
    }, [])
  },
}, defaultState)
