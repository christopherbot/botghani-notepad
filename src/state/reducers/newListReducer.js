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
}, defaultState)
