import { useEffect, useContext } from 'react'
import { styled } from '@mui/material'
import { states } from '../App'
import QuoteCard from './QuoteCard'
import NextButton from './NextButton'
import { Entry } from '../../types'
import ToggleThemeButton from './ToggleThemeButton'
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
    entries: { entries, pushEntry }
  } = useContext(states)

  async function fetchQuote() {
    const url = 'https://api.quotable.io/random'
    const quote = await fetch(url).then(resp => resp.json())
    pushEntry({
      content: { text: quote.content, font: getRandomFont() },
      author: { text: quote.author, font: getRandomFont() },
    })
  }

  useEffect(() => { fetchQuote() }, [])

  return (
    <ScrollableDiv className='main-ctn'>
      {entries
        .map((entry: Entry, i: number) =>
          <QuoteCard
            key={i}
            content={entry.content}
            author={entry.author}
          />)}
      <NextButton fetchQuote={fetchQuote} />
      <ToggleThemeButton />
    </ScrollableDiv>
  )
}

export default Main
