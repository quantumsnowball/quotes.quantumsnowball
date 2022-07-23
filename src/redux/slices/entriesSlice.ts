import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Entry } from '../../types'


const initialState = {
  entries: [] as Entry[]
}

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    pushEntry: (s, a: PayloadAction<Entry>) => {
      s.entries = [a.payload, ...s.entries]
    },
    removeEntry: (s, a: PayloadAction<number>) => {
      s.entries = s.entries.filter((_, i) => i !== a.payload)
    }
  }
})

export const entriesActions = entriesSlice.actions

export const entriesReducer = entriesSlice.reducer
