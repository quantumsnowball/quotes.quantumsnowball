import { createContext } from 'react'
import '../styles/App.css'
import { styled, ThemeProvider } from '@mui/material'
import useColorTheme from '../hooks/useColorTheme'
import Main from '../components/Main'
import useArray from '../hooks/useArray'
import { States, Entry } from '../types'


const FlexColumnDiv = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  color: ${props => props.theme.palette.text.primary};
  background-color: ${props => props.theme.palette.background.default};
`

export const states = createContext<States>({} as States)

function App() {
  const { toggleMode, theme } = useColorTheme('dark')
  const {
    value: entries,
    setValue: setEntries,
    push: pushEntry
  } = useArray<Entry>([])

  return (
    <states.Provider value={{
      theme: { toggleMode },
      entries: { entries, setEntries, pushEntry },
    }}>
      <ThemeProvider theme={theme}>
        <FlexColumnDiv>
          <Main />
        </FlexColumnDiv>
      </ThemeProvider>
    </states.Provider >
  )
}

export default App

