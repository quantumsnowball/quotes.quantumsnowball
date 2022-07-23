import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Entry } from '../../types'


const initialState = {
  favorites: [] as Entry[]
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    pushEntry: (s, a: PayloadAction<Entry>) => {
      s.favorites = [a.payload, ...s.favorites]
    },
    removeEntry: (s, a: PayloadAction<number>) => {
      s.favorites = s.favorites.filter((_, i) => i !== a.payload)
    }
  }
})

export const favoritesActions = favoritesSlice.actions

export const favoritesReducer = favoritesSlice.reducer
