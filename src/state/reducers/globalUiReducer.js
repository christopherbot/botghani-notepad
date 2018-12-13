import { handleActions } from 'redux-actions'
import { setActiveList } from '../actions'

const defaultState = {
  activeListId: null,
}

export default handleActions({
  [setActiveList](state, { payload }) {
    return {
      ...state,
      activeListId: payload.listId,
    }
  },
}, defaultState)
