import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import globalReducer from 'state/reducers/globalReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const store = createStore(
  env.PERSIST_STATE ? persistReducer(persistConfig, globalReducer) : globalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const persister = persistStore(store)

export default store
