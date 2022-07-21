import { useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { styled } from '@mui/material'
import { states } from '../App'
import { ExplorerQuoteCard, FavoritesQuoteCard } from './QuoteCard'
import NextButton from './NextButton'
import { Entry } from '../../types'
import { getRandomFont } from '../../styles/fonts'


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

  async function fetchQuote() {
    const url = 'https://api.quotable.io/random'
    const quote = await fetch(url).then(resp => resp.json())
    pushEntry({
      uuidv4: uuidv4(),
      content: { text: quote.content, font: getRandomFont() },
      author: { text: quote.author, font: getRandomFont() },
    })
  }

  useEffect(() => { fetchQuote() }, [])

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
      <NextButton fetchQuote={fetchQuote} />
    </>
  )
}

export default Main
