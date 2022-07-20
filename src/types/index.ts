export interface StyledText {
  text: string,
  font: string
}

export interface Entry {
  content: StyledText,
  author: StyledText
}

export type ColorMode = 'light' | 'dark'

export interface States {
  theme: {
    toggleMode: () => void
  },
  entries: {
    entries: Entry[],
    setEntries: React.Dispatch<React.SetStateAction<Entry[]>>,
    pushEntry: (element: Entry) => void
  },
  favorites: {
    favorites: Entry[],
    setFavorites: React.Dispatch<React.SetStateAction<Entry[]>>,
    pushFavorite: (element: Entry) => void
  }
}
