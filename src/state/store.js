import { createStore } from 'redux'
import globalReducer from './reducers/globalReducer'
import { persistStore, persistReducer } from 'redux-persist'
import { PERSIST_STATE } from 'react-native-dotenv'

import storage from 'redux-persist/lib/storage'

const persistState = PERSIST_STATE === 'true'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, globalReducer)

const store = createStore(
  persistState ? persistedReducer : globalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const persister = persistStore(store)

export default store
