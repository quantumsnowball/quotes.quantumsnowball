import {
  Box,
  styled, useMediaQuery, useTheme
} from '@mui/material'
import { ExplorerQuoteCard, FavoritesQuoteCard } from './Pages/Card'
import { Routes, Route } from 'react-router-dom'
import Page from './Pages'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


// .main-ctn
const ScrollableDiv = styled('div')`
  /* take all flex space from parents */
  flex-grow: 1;
  /* flex column display all quote cards */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-item: stretch;
  align-content: center;
  /* allow scrollbar here*/
  overflow: auto;
  /* text */
  text-align: left;
`

function Main() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const explorerItems = useSelector(((s: RootState) => s.explorer.entries))
  const favoritesItems = useSelector(((s: RootState) => s.favorities.entries))

  const explorerPage = <Page items={explorerItems} Card={ExplorerQuoteCard} />
  const favoritesPage = <Page items={favoritesItems} Card={FavoritesQuoteCard} />

  return (
    <>
      {isMobile ? <Box sx={{ minHeight: '56px' }} /> : null}
      <ScrollableDiv className='main-ctn'>
        <Routes>
          <Route path="/" element={explorerPage} />
          <Route path="/explorer" element={explorerPage} />
          <Route path="/favorites" element={favoritesPage} />
        </Routes>
      </ScrollableDiv>
      {isMobile ? <Box sx={{ minHeight: '56px' }} /> : null}
    </>
  )
}

export default Main
