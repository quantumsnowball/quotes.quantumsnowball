import { createContext } from 'react'
import '../styles/App.css'
import { ThemeProvider } from '@mui/material'
import useColorTheme from '../hooks/useColorTheme'
import styled from '@emotion/styled'
import Main from '../components/Main'
import useArray from '../hooks/useArray'
import { States, Entry } from '../types'


const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-color: #6c692a;
  color: white;
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
      entries: { entries, setEntries, pushEntry },
    }}>
      <ThemeProvider theme={theme}>
        <Div >
          <Main />
        </Div>
      </ThemeProvider>
    </states.Provider >
  )
}

export default App

