import { useEffect, useContext } from 'react'
import { styled } from '@mui/material'
import { states } from '../App'
import QuoteCard from './QuoteCard'
import NextButton from './NextButton'
import { Entry } from '../../types'
import ToggleThemeButton from './ToggleThemeButton'


const ScrollableDiv = styled('div')`
  flex-grow: 1;
  text-align: left;
  overflow: auto;
`

function Main() {
  const {
    entries: { entries, pushEntry }
  } = useContext(states)

  async function fetchQuote() {
    const url = 'https://api.quotable.io/random'
    const quote = await fetch(url).then(resp => resp.json())
    pushEntry({
      content: quote.content,
      author: quote.author,
    })
  }

  useEffect(() => { fetchQuote() }, [])

  return (
    <ScrollableDiv>
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
