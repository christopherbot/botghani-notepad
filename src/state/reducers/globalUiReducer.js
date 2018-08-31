import { handleActions } from 'redux-actions'
import { toggleNav } from '../actions'

const defaultState = {
  isNavOpen: true,
}

export default handleActions({
  [toggleNav](state) {
    return {
      ...state,
      isNavOpen: !state.isNavOpen,
    }
  },
}, defaultState)