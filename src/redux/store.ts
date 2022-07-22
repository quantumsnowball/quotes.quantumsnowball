import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import themeReducer from './slices/themeSlice'


// reducers
const rootReducer = combineReducers({
  theme: themeReducer
})

// store
export const store = configureStore({
  reducer: persistReducer({ key: 'root', storage }, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

// persistor
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
