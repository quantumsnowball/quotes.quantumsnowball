import { useContext } from 'react'
import { styled } from '@mui/material'
import { states } from '../App'
import { ExplorerQuoteCard, FavoritesQuoteCard } from './QuoteCard'
import { Entry } from '../../types'


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
  const {
    page: { page },
    entries: { entries, pushEntry },
    favorites: { favorites }
  } = useContext(states)


  const pages = {
    explorer: entries.map((entry: Entry, i: number) =>
      <ExplorerQuoteCard key={entry.uuidv4} index={i} {...entry} />),
    favorites: favorites.map((entry: Entry, i: number) =>
      <FavoritesQuoteCard key={entry.uuidv4} index={i} {...entry} />)
  }

  return (
    <>
      <ScrollableDiv className='main-ctn'>
        {pages[page]}
      </ScrollableDiv>
    </>
  )
}

export default Main
