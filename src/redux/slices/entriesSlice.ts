import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Entry } from '../../types'


const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    entries: [] as Entry[]
  },
  reducers: {
    pushEntry: (s, a: PayloadAction<Entry>) => {
      s.entries = [a.payload, ...s.entries]
    },
    removeEntry: (s, a: PayloadAction<number>) => {
      s.entries = s.entries.filter((_, i) => i !== a.payload)
    },
    toggleExpanded: (s, a: PayloadAction<number>) => {
      s.entries[a.payload].metadata.expanded = 
        !s.entries[a.payload].metadata.expanded
    }
  }
})

export const entriesActions = entriesSlice.actions

export const entriesReducer = entriesSlice.reducer
