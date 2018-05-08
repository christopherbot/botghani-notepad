import { createStore } from 'redux'
import globalReducer from './reducers/globalReducer'

const store = createStore(globalReducer)

export default store
