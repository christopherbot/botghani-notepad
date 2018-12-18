import { handleActions } from 'redux-actions'
import { setActiveList, setIsModalOpen } from '../actions'

const defaultState = {
  activeListId: null,
  isModalOpen: false,
}

export default handleActions({
  [setActiveList](state, { payload }) {
    return {
      ...state,
      activeListId: payload.listId,
    }
  },
  [setIsModalOpen](state, { payload }) {
    return {
      ...state,
      isModalOpen: payload.isOpen,
    }
  },
}, defaultState)
