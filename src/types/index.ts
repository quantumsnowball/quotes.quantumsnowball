export interface Entry {
  content: string,
  author: string
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
  }
}
