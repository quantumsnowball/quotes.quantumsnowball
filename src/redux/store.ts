import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistReducer, persistStore,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { themeReducer } from './slices/themeSlice'
import { explorerReducer } from './slices/explorerSlice'
import { favoritesReducer } from './slices/favoritesSlice'
import { layoutReducer } from './slices/layoutSlice'


// reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  explorer: explorerReducer,
  favorities: favoritesReducer,
  layout: layoutReducer
})

// store
export const store = configureStore({
  reducer: persistReducer({ key: 'root', storage }, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

// persistor
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
