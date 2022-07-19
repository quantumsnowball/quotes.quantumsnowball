export interface Entry {
  content: string,
  author: string
}

export interface States {
  entries: {
    entries: Entry[],
    setEntries: React.Dispatch<React.SetStateAction<Entry[]>>,
    pushEntry: (element: Entry) => void
  }
}
