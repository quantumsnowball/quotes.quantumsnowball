import { createContext, useEffect } from 'react'
import { styled, ThemeProvider } from '@mui/material'
import useColorTheme from '../hooks/useColorTheme'
import Main from '../components/Main'
import MenuBar from '../components/MenuBar'
import BottomNav from '../components/BottomNav'
import useArray from '../hooks/useArray'
import { States, Entry } from '../types'


// .app-ctn
const FlexColumnDiv = styled('div')`
  /* cover full viewport */
  width: 100vw;
  height: 100vh;
  /* flex column display sections */
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
  /* theme */
  color: ${props => props.theme.palette.text.primary};
  background-color: ${props => props.theme.palette.background.default};
`

export const states = createContext<States>({} as States)

function App() {
  const { mode, toggleMode, theme } = useColorTheme('dark')
  const {
    value: entries,
    setValue: setEntries,
    push: pushEntry
  } = useArray<Entry>([])

  useEffect(() => {
    document.body.style.backgroundColor = theme().palette.background.default
  }, [mode])

  return (
    <states.Provider value={{
      theme: { toggleMode },
      entries: { entries, setEntries, pushEntry },
    }}>
      <ThemeProvider theme={theme}>
        <FlexColumnDiv className="app-ctn">
          <MenuBar />
          <Main />
          <BottomNav />
        </FlexColumnDiv>
      </ThemeProvider>
    </states.Provider >
  )
}

export default App

