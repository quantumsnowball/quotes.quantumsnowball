export interface StyledText {
  text: string,
  font: string
}

export interface Entry {
  uuidv4: string,
  content: StyledText,
  author: StyledText,
  metadata: {
    expanded: boolean
  }
}

export type ColorMode = 'light' | 'dark'

