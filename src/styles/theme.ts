import { PaletteMode } from '@mui/material'


const themeConfigs = (mode: PaletteMode) => ({
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

export default themeConfigs
