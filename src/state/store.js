import { createStore } from 'redux'
import globalReducer from './reducers/globalReducer'

const store = createStore(
  globalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
