import { handleActions } from 'redux-actions'
import { createList, deleteList } from '../actions'
import generateList from '../../utils/generateList'

const defaultState = []

export default handleActions({
  [createList](state, { payload }) {
    return [...state, generateList(payload.name)]
  },

  [deleteList](state, { payload }) {
    return state.filter(list => payload.listId !== list.id)
  },
}, defaultState)
