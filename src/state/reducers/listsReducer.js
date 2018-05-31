import { handleActions } from 'redux-actions'
import { createList, deleteList, renameList } from '../actions'
import generateList from '../../utils/generateList'

const defaultState = []

export default handleActions({
  [createList](state, { payload }) {
    return [...state, generateList(payload.name)]
  },

  [deleteList](state, { payload }) {
    return state.filter(list => list.id !== payload.listId)
  },

  [renameList](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          columns: list.columns.map((column) => {
            if (column.isFirstColumn) {
              return {
                ...column,
                value: payload.newName,
              }
            }

            return column
          })
        }
      }

      return list
    })
  },
}, defaultState)
