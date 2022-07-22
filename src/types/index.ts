export interface StyledText {
  text: string,
  font: string
}

export interface Entry {
  uuidv4: string,
  content: StyledText,
  author: StyledText
}

export type ColorMode = 'light' | 'dark'

export interface States {
  entries: {
    entries: Entry[],
    setEntries: React.Dispatch<React.SetStateAction<Entry[]>>,
    pushEntry: (element: Entry) => void
    removeEntry: (index: number) => void
  },
  favorites: {
    favorites: Entry[],
    setFavorites: React.Dispatch<React.SetStateAction<Entry[]>>,
    pushFavorite: (element: Entry) => void
    removeFavorite: (index: number) => void
  }
}
