import { createSlice } from '@reduxjs/toolkit'
import { ColorMode } from '../../types'


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'dark' as ColorMode
  },
  reducers: {
    toggleMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    }
  }
})

export const themeActions = themeSlice.actions

export const themeReducer = themeSlice.reducer
