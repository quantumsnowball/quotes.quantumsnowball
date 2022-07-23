import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistReducer, persistStore,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { themeReducer } from './slices/themeSlice'
import { entriesReducer } from './slices/entriesSlice'
import { favoritesReducer } from './slices/favoritesSlice'


// reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  entries: entriesReducer,
  favorities: favoritesReducer
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
