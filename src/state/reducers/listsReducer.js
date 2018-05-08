import { handleActions } from 'redux-actions'
import { createList } from '../actions'

const defaultState = []

export default handleActions({
  [createList](state, { payload }) {
    return [
      ...state,
      payload.name,
    ]
  },
}, defaultState)
