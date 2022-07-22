import { createSlice } from '@reduxjs/toolkit'
import { ColorMode } from '../../types'


interface ThemeState {
  mode: ColorMode
}

const initialState: ThemeState = {
  mode: 'dark'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    }
  }
})

export const themeActions = themeSlice.actions

export const themeReducer = themeSlice.reducer
