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

const chooseTheme = (name: ThemeName) => ({
  elementary, beach
}[name])

export default chooseTheme
