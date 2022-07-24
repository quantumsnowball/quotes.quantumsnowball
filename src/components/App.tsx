import { useCallback, useEffect } from 'react'
import { createTheme, styled, ThemeProvider } from '@mui/material'
import Main from '../components/Main'
import MenuBar from '../components/MenuBar'
import BottomNav from '../components/BottomNav'
import { BrowserRouter } from "react-router-dom"
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import themeConfigs from '../styles/theme'


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

function App() {
  const mode = useSelector((s: RootState) => s.theme.mode)
  const theme = useCallback(() => createTheme(themeConfigs(mode)), [mode])

  useEffect(() => {
    document.body.style.backgroundColor = theme().palette.background.default
  }, [mode, theme])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <FlexColumnDiv className="app-ctn">
          <MenuBar />
          <Main />
          <BottomNav />
        </FlexColumnDiv>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

