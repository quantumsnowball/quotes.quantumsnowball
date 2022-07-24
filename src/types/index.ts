export interface StyledText {
  text: string,
  font: string
}

export interface Content {
  quote: StyledText | null,
  author: StyledText | null,
}

export interface Media {
  image: string | null
}

export interface Layout {
  expanded: boolean
}

export interface Entry extends Content, Media, Layout {
  uuidv4: string
}

export type ColorMode = 'light' | 'dark'

