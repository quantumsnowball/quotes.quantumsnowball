import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Content, Media, Entry } from '../../../types'


const defaultState = {
  entries: [] as Entry[]
}

const createEntrySlice =
  (name: string, initialState = defaultState) =>
    createSlice({
      name,
      initialState,
      reducers: {
        pushEntry: (s, a: PayloadAction<Entry>) => {
          s.entries = [a.payload, ...s.entries]
        },
        removeEntry: (s, a: PayloadAction<number>) => {
          s.entries = s.entries.filter((_, i) => i !== a.payload)
        },
        updateContent: (s, a: PayloadAction<{ uuidv4: string, content: Content }>) => {
          s.entries.forEach((v, i) => {
            if (v.uuidv4 === a.payload.uuidv4) {
              s.entries[i].quote = a.payload.content.quote
              s.entries[i].author = a.payload.content.author
            }
          })
        },
        updateMedia: (s, a: PayloadAction<{ uuidv4: string, media: Media }>) => {
          s.entries.forEach((v, i) => {
            if (v.uuidv4 === a.payload.uuidv4) {
              s.entries[i].image = a.payload.media.image
            }
          })
        },
        toggleExpanded: (s, a: PayloadAction<number>) => {
          s.entries[a.payload].expanded =
            !s.entries[a.payload].expanded
        }
      }
    })

export default createEntrySlice
