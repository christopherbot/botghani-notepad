import { handleActions } from 'redux-actions'
import { 
  setActiveList, 
  setIsModalOpen,
  setFavouriteList, 
  deleteList,
  setIsCellOptionsOpen,
} from 'state/actions'

const defaultState = {
  activeListId: null,
  isModalOpen: false,
  favouriteListId: null,
  isCellModalOpen: false
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
  [setFavouriteList](state, { payload }) {
    return {
      ...state,
      favouriteListId: payload.listId,
    }
  },
  [deleteList](state, { payload }) {
    if (payload.listId === state.favouriteListId) {
      return {
        ...state,
        favouriteListId: null,
      }
    }

    return state
  },
  [setIsCellOptionsOpen](state, { payload }) {
    return {
      ...state,
      isCellModalOpen: payload.isOpen
    }
  },
}, defaultState)
