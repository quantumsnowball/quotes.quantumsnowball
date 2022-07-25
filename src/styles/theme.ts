import { PaletteMode } from '@mui/material'
import { ThemeName } from '../types'


const elementary = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        background: {
          default: '#fafafa',
          paper: '#ffffff',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#303030',
          paper: '#424242',
        },
      }),
  },
})

const beach = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        background: {
          default: '#fff59d',
          paper: '#fff9c4',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#433d25',
          paper: '#484834',
        },
      }),
  },
})

const forest = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#2e7d32',
          light: '#4caf50',
          dark: '#1b5e20',
        },
        background: {
          default: '#81c784',
          paper: '#a5d6a7',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#0f3311',
          paper: '#173f1a',
        },
      }),
  },
})

const chooseTheme = (name: ThemeName) => ({
  elementary, beach, forest
}[name])

export default chooseTheme
