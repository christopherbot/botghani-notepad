import { combineReducers } from 'redux'
import globalUi from './globalUiReducer'
import lists from './listsReducer'

export default combineReducers({
  globalUi,
  lists,
})
