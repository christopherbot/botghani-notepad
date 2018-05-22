import { handleActions } from 'redux-actions'
import { createList } from '../actions'
import generateList from '../../utils/generateList'

const defaultState = []

export default handleActions({
  [createList](state, { payload }) {
    return [...state, generateList(payload.name)]
  },
}, defaultState)
