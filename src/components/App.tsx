import { createContext, useEffect, useState } from 'react'
import { styled, ThemeProvider } from '@mui/material'
import useColorTheme from '../hooks/useColorTheme'
import Main from '../components/Main'
import MenuBar from '../components/MenuBar'
import BottomNav from '../components/BottomNav'
import { usePersistedArray } from '../hooks/useArray'
import { States, Entry, Page } from '../types'
import { BrowserRouter } from "react-router-dom"


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
  const [page, setPage] = useState<Page>('explorer')
  const {
    value: entries,
    setValue: setEntries,
    push: pushEntry,
    remove: removeEntry
  } = usePersistedArray<Entry>('entries', [])
  const {
    value: favorites,
    setValue: setFavorites,
    push: pushFavorite,
    remove: removeFavorite
  } = usePersistedArray<Entry>('favorites', [])

  useEffect(() => {
    document.body.style.backgroundColor = theme().palette.background.default
  }, [mode])

  return (
    <states.Provider value={{
      theme: { toggleMode },
      page: { page, setPage },
      entries: { entries, setEntries, pushEntry, removeEntry },
      favorites: { favorites, setFavorites, pushFavorite, removeFavorite },
    }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <FlexColumnDiv className="app-ctn">
            <MenuBar />
            <Main />
            <BottomNav />
          </FlexColumnDiv>
        </BrowserRouter>
      </ThemeProvider>
    </states.Provider >
  )
}

export default App

