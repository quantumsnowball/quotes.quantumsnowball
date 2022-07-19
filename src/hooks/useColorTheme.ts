import { useCallback } from 'react'
import { createTheme } from '@mui/material/styles'
import useLocalStorage from './generic/useLocalStorage'
import { ColorMode } from '../types'
import themeConfigs from '../styles/theme'


function useColorTheme(initialValue: ColorMode) {
  const [mode, setMode] = useLocalStorage('colorMode', initialValue)

  const toggleMode = () =>
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')

  const theme = useCallback(() => createTheme(themeConfigs(mode)), [mode])

  return { mode, setMode, toggleMode, theme }
}

export default useColorTheme

