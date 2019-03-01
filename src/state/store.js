import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import globalReducer from 'state/reducers/globalReducer'
import env from '~/env'

const persistConfig = {
  key: 'root',
  storage,
}

const store = createStore(
  env.persistState ? persistReducer(persistConfig, globalReducer) : globalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const persister = persistStore(store)

export default store
