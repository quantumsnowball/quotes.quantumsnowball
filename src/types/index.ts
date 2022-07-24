export interface StyledText {
  text: string,
  font: string
}

export interface Entry {
  uuidv4: string,
  content: StyledText | null,
  author: StyledText | null,
  metadata: {
    expanded: boolean,
    image: string | null
  }
}

export type ColorMode = 'light' | 'dark'

