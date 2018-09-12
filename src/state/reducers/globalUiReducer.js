import { handleActions, combineActions } from 'redux-actions'
import { toggleNav, setActiveList, createList, createExampleList } from '../actions'

const defaultState = {
  isNavOpen: true,
  activeListId: null,
}

export default handleActions({
  [combineActions(createList, createExampleList)](state, { payload }) {
    return {
      ...state,
      isNavOpen: false,
    }
  },
  [toggleNav](state) {
    return {
      ...state,
      isNavOpen: !state.isNavOpen,
    }
  },
  [setActiveList](state, { payload }) {
    return {
      ...state,
      isNavOpen: false,
      activeListId: payload.listId,
    }
  },
}, defaultState)
