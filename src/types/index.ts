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
  favorites: {
    favorites: Entry[],
    setFavorites: React.Dispatch<React.SetStateAction<Entry[]>>,
    pushFavorite: (element: Entry) => void
    removeFavorite: (index: number) => void
  }
}
